from fastapi import FastAPI
from app.routes import optimize
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Prompt Optimizer API")

@app.get("/")
def home():
    return {"message": "API is running"}

app.include_router(optimize.router, prefix="/api")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)