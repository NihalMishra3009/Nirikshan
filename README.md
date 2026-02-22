📊 Nirikshan – Automated Data Intelligence Engine

Nirikshan is a smart data observation platform that transforms raw CSV files into structured dashboards with automatically generated insights and built-in data quality checks — without requiring technical expertise.

It automatically observes, audits, analyzes, and explains datasets instantly.

🚀 Project Vision

Modern data tools require manual configuration and analyst expertise.

Nirikshan removes that friction by:

Automatically detecting schema

Performing data quality audits

Computing statistical summaries

Detecting trends and growth

Identifying anomalies

Recommending appropriate visualizations

Generating ranked, human-readable insights

All from a single CSV upload.

🧠 Core Features
🔹 1. CSV Upload

Upload any structured CSV file.

🔹 2. Schema Detection

Automatically detects:

Numeric columns

Categorical columns

Datetime columns

Row & column count

🔹 3. Data Quality Audit

Missing value detection

Duplicate row detection

Data completeness percentage

🔹 4. Statistical Summary

For numeric columns:

Mean

Median

Standard deviation

Min / Max

Total

🔹 5. Pattern Detection

Trend detection (upward / downward / stable)

Growth percentage

Correlation analysis

🔹 6. Anomaly Detection

Uses rule-based logic:

mean + 2 * standard deviation

Returns anomaly counts and affected rows.

🔹 7. Smart Chart Recommendation

Recommends:

Line chart (time-series)

Bar chart (categorical comparison)

Histogram (numeric distribution)

🔹 8. Insight Generation

Generates ranked insights such as:

Dataset completeness

Duplicate warnings

Growth observations

Anomaly alerts

🏗 Architecture Overview

Frontend and backend are cleanly separated.

Frontend (React + Vite)
        ↓
FastAPI Backend
        ↓
Pandas + NumPy Processing Engine
        ↓
Structured JSON Response

No database.
Stateless processing.
Modular service architecture.

🛠 Tech Stack
🔹 Frontend

React (Vite)

Recharts

Axios

jsPDF + html2canvas

🔹 Backend

Python 3.11

FastAPI

Uvicorn

Pandas

NumPy

📂 Project Structure
Backend
backend/
│
├── main.py
├── services/
│   ├── schema_detection.py
│   ├── audit_engine.py
│   ├── stats_engine.py
│   ├── anomaly_engine.py
│   ├── pattern_engine.py
│   ├── chart_engine.py
│   └── insight_generator.py
Frontend
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   └── api.js
▶️ How to Run the Project
🔹 1. Clone Repository
git clone <repository_url>
cd Nirikshan
🔹 2. Run Backend
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
python -m uvicorn main:app --reload

Backend runs at:

http://127.0.0.1:8000

Swagger API docs:

http://127.0.0.1:8000/docs
🔹 3. Run Frontend
cd frontend
npm install
npm run dev

Frontend runs at:

http://localhost:5173
📤 API Endpoint
POST /analyze

Accepts:

multipart/form-data
key: file
type: CSV

Returns structured JSON:

{
  schema: {},
  audit_report: {},
  summary_stats: {},
  patterns: {},
  anomalies: {},
  recommended_chart: {},
  chart_data: [],
  processed_data: [],
  insights: []
}
⚠ Scope Control

This project intentionally does NOT include:

Authentication system

Database storage

Machine learning models

Forecasting systems

Advanced statistical modeling

Complex UI animations

Focus: Automated intelligence & clean architecture.

🎯 Use Cases

Rapid data inspection

Hackathon demo

Quick business analysis

Education projects

Lightweight analytics engine

🏁 Final Positioning Statement

Nirikshan automatically observes, audits, analyzes, and explains raw datasets — turning them into decision-ready insights instantly.ss