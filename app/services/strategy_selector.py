from app.services.llm_service import call_groq
import json

def select_strategy(description: str, role: str):

    prompt = f"""
You are an expert in prompt engineering.

Select the BEST prompting strategies.

---

User Input:
"{description}"

User Role:
{role}

---

Available Strategies:
- zero_shot
- one_shot
- few_shot
- chain_of_thought
- step_back
- self_consistency
- tree_of_thought
- react
- system_role

---

Return STRICT JSON:

{{
  "strategies": ["strategy1", "strategy2"],
  "reason": "short explanation",
  "confidence": 0.0 to 1.0
}}

Rules:
- Max 3 strategies
- Confidence must be realistic
- No extra text
"""

    response = call_groq(prompt)

    try:
        data = json.loads(response)
        return data
    except:
        return {
            "strategies": ["zero_shot"],
            "reason": "fallback",
            "confidence": 0.5
        }