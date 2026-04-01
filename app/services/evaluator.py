from app.services.llm_service import call_groq


def evaluate_prompts(user_input: str, basic_prompt: str, optimized_prompt: str):

    eval_prompt = f"""
You are an expert prompt evaluator.

Compare two prompts fairly.

---

User Input:
{user_input}

Prompt 1:
{basic_prompt}

Prompt 2:
{optimized_prompt}

---

Scoring Guidelines:

- Basic prompt should NOT be scored extremely low unless it is useless
- Optimized prompt should score higher if it is more structured and detailed
- Scores should be realistic and balanced (between 4–9 range usually)

---

Return ONLY JSON:

{{
  "basic_score": <number between 1-10>,
  "optimized_score": <number between 1-10>,
  "winner": "<basic or optimized>",
  "reason": "<short explanation>"
}}

DO NOT include extra text.
"""


    response = call_groq(eval_prompt)

    return response