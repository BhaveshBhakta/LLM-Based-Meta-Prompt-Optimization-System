from app.services.llm_service import call_groq

def refine_prompt(original_prompt: str, feedback: str):

    prompt = f"""
You are an expert prompt engineer.

The following prompt produced a weak result.

---

Original Prompt:
{original_prompt}

---

Feedback:
{feedback}

---

Improve the prompt by:
- Making it more structured
- Making instructions more precise
- Increasing clarity and usefulness

---

Return ONLY the improved prompt.
"""

    return call_groq(prompt)