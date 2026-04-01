import os
import requests
from dotenv import load_dotenv
import logging
logging.basicConfig(level=logging.INFO)
load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

def call_groq(prompt: str):
    for attempt in range(2):  
        try:
            headers = {
                "Authorization": f"Bearer {GROQ_API_KEY}",
                "Content-Type": "application/json"
            }

            data = {
                "model": "llama-3.1-8b-instant",
                "messages": [
                    {"role": "system", "content": "You are a world-class prompt engineer."},
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.85,
                "top_p": 0.9,
                "max_tokens": 800,
            }

            logging.info(f"Groq call attempt {attempt+1}")

            response = requests.post(
                GROQ_URL,
                headers=headers,
                json=data,
                timeout=30
            )

            if response.status_code == 200:
                result = response.json()
                return result["choices"][0]["message"]["content"]

            logging.error(f"Groq Error: {response.text}")

        except Exception as e:
            logging.error(f"Attempt {attempt+1} failed: {str(e)}")
            time.sleep(1)

    return "Error: LLM service unavailable"