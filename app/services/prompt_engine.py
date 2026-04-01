from app.services.llm_service import call_groq

def generate_advanced_prompt(description: str, role: str, strategies=None):

    strategy_text = ""
    if strategies:
        strategy_text = "Use the following prompting strategies where appropriate: " + ", ".join(strategies)

    meta_prompt = f"""
You are an expert prompt engineer.

Your task is NOT to answer the user.

Your task is to CREATE a high-quality prompt that another LLM will use.

---

User Input:
"{description}"

User Role:
{role}

{strategy_text}

---

Generate a PROFESSIONAL PROMPT using EXACTLY this structure:

---

You are a [clearly defined expert role].

Your goal is to [clear objective tailored to the user's role].

---

Task:
[Clearly define the task the AI should perform based on the user’s request]

---

Instructions:
1. Introduce concepts through real-world scenarios instead of abstract definitions
2. Build understanding progressively from simple to complex ideas
3. Compare concepts using practical examples or contrasting cases
4. Reinforce understanding with short, concrete use-cases
5. Focus on actionable understanding rather than theoretical listing

---

Output Format:
[Strict structure: markdown, sections, bullets]

---

Constraints:
- Avoid unnecessary jargon
- Do not ask follow-up questions
- Ensure clarity and completeness

---

ADDITIONAL REQUIREMENTS:

- Adapt tone based on role:
  student → beginner-friendly  
  developer → practical  
  researcher → deeper insight  

- Avoid generic instructions like "define" or "explain" without context

- Instructions must NOT be obvious or generic
- Avoid verbs like "define", "explain", "describe" without context
- Each instruction should guide HOW to think, not just WHAT to do

- Keep instructions concise and sharp (avoid long sentences)
- Prefer actionable phrasing over descriptive phrasing
- Avoid making the prompt feel like a curriculum or syllabus
---

IMPORTANT RULES:

- DO NOT generate the answer
- DO NOT use words like "rewrite", "expand"
- DO NOT refer to the user input
- DO NOT make it look like a syllabus
- MUST start with "You are..."
- DO NOT include markdown titles like "###" anywhere in the output

---

STYLE:

- Clean
- Structured
- Professional
- Copy-paste ready

---

Return ONLY the final prompt.
"""

    return call_groq(meta_prompt).strip()