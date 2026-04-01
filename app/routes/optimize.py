from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import logging
import json
from app.services.strategy_selector import select_strategy
from app.services.prompt_engine import generate_advanced_prompt
from app.services.basic_prompt import generate_basic_prompt
from app.services.evaluator import evaluate_prompts
from app.services.refinement import refine_prompt

router = APIRouter()

logging.basicConfig(level=logging.INFO)

class PromptRequest(BaseModel):
    description: str
    role: str = "user"

@router.post("/optimize")
def optimize_prompt(data: PromptRequest):
    try:
        # Clean input
        clean_description = data.description.strip()
        if not clean_description:
            raise HTTPException(status_code=400, detail="Description cannot be empty")

        clean_description = clean_description[0].upper() + clean_description[1:]

        logging.info(f"Received input: {clean_description}")

        # Select strategies (LLM-based)
        strategy_data = select_strategy(clean_description, data.role)

        strategies = strategy_data.get("strategies", ["zero_shot"])
        reason = strategy_data.get("reason", "")
        confidence = strategy_data.get("confidence", 0.5)

        logging.info(f"Strategies: {strategies}")
        logging.info(f"Reason: {reason}")
        logging.info(f"Confidence: {confidence}")

        # Generate prompts
        basic_prompt = generate_basic_prompt(clean_description)

        optimized_prompt = generate_advanced_prompt(
            clean_description,
            data.role,
            strategies
        )

        logging.info("Generated optimized prompt")

        # Evaluate prompts
        evaluation = evaluate_prompts(
            clean_description,
            basic_prompt,
            optimized_prompt
        )

        logging.info(f"Evaluation result: {evaluation}")

        # Parse evaluation safely
        try:
            eval_data = json.loads(evaluation)
            score = eval_data.get("optimized_score", 10)
            feedback = eval_data.get("reason", "")
        except Exception:
            logging.warning("Failed to parse evaluation JSON")
            score = 10
            feedback = ""

        # Improve if weak
        if score < 7:
            logging.info("Refining prompt due to low score")

            improved_prompt = refine_prompt(optimized_prompt, feedback)

            return {
                "optimized_prompt": improved_prompt,
                "strategy_used": strategies,
                "confidence": confidence
            }

        # Otherwise return original
        return {
            "optimized_prompt": optimized_prompt,
            "strategy_used": strategies,
            "confidence": confidence
        }

    except Exception as e:
        logging.error(f"Error in optimize route: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")