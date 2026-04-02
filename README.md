# LLM-Based-Meta-Prompt-Optimization-System

An AI-powered system that transforms simple user inputs into high-quality, structured prompts.

This project uses Large Language Models (LLMs) to dynamically select the best prompt engineering strategies based on user intent. It improves prompt quality through task understanding, strategy selection, prompt generation, and self-evaluation. The system integrates **LLM-based reasoning**, **dynamic strategy selection**, **prompt generation (Groq LLaMA-3)**, and **workflow orchestration using n8n**, with a **FastAPI backend** and a **React frontend**.

---

# Key Features

## 1. Intelligent Prompt Optimization

The system analyzes user input and selects appropriate prompting strategies such as chain-of-thought, few-shot, and step-back reasoning. It generates structured, professional prompts that are ready to use without manual refinement.

---

## 2. Self-Improving System

Generated prompts are evaluated against basic prompts using an LLM-based scoring mechanism. If required, the system refines the prompt to improve clarity, structure, and usefulness.

---

## 3. Modular AI Architecture

The system is built using a modular architecture where n8n handles orchestration, FastAPI manages backend logic, and Groq LLaMA-3 powers reasoning and generation. This separation allows scalability and easy extension.

---

# Website Overview
![landingpageprompt](https://github.com/user-attachments/assets/8ba9cc8b-c2c5-4d0d-84ba-a58128f29166)
![promptpage](https://github.com/user-attachments/assets/bf73a7ed-792a-4a92-adda-21dc8ddc79c2)

---

# Quick Start

## Clone the repository

```
git clone https://github.com/BhaveshBhakta/LLM-Based-Meta-Prompt-Optimization-System.git
cd LLM-Based-Meta-Prompt-Optimization-System
```

---

## Backend Setup

```
pip install -r requirements.txt
```

---

## Setup Environment Variables

Create a `.env` file in backend:

```
GROQ_API_KEY=your_api_key_here
```

---

## Run FastAPI Server

```
uvicorn app.main:app --reload
```

---

## Setup n8n

Start n8n using Docker:

```
docker-compose up -d
```

Open `http://localhost:5678`, import the workflow from `n8n/workflows/prompt-optimize.json`, and activate it.

---

## Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## Open Web App

```
http://localhost:3000
```

---

# High-Level Architecture

<img width="1383" height="1136" alt="promptarch" src="https://github.com/user-attachments/assets/f712fec0-8958-48ed-a280-321972561a76" />


---

# Project Structure

```
prompt-optimizer/
│
├── app/
├── frontend/
├── n8n/
│   └── workflows/
├── requirements.txt
├── .env
└── README.md
```

---

# Roadmap & Future Work

Future improvements include adding prompt strategy analytics, A/B testing for strategy comparison, user feedback integration, multi-model support, and deployment for production environments.

