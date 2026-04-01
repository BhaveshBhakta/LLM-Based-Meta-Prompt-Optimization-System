def analyze_task(description: str):
    desc = description.lower()

    if "learn" in desc:
        return "learning"
    elif "code" in desc:
        return "coding"
    elif "image" in desc:
        return "image_generation"
    elif "write" in desc or "paraphrase" in desc:
        return "writing"
    else:
        return "general"