from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
import io

from services.schema_detection import detect_schema
from services.audit_engine import run_audit
from services.stats_engine import compute_statistics
from services.anomaly_engine import detect_anomalies
from services.pattern_engine import detect_patterns
from services.insight_generator import generate_insights
from services.chart_engine import recommend_chart, generate_chart_data


app = FastAPI(title="Nirikshan - Data Intelligence Engine")


# --------------------------------------------------
# ✅ ENABLE CORS (For Vite Frontend on 5173)
# --------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# Health Check
# --------------------------------------------------
@app.get("/")
def root():
    return {
        "message": "Nirikshan Data Intelligence Engine is running",
        "status": "active"
    }


# --------------------------------------------------
# Core Analyze Endpoint
# --------------------------------------------------
@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    try:
        contents = await file.read()

        if not contents:
            return JSONResponse(
                status_code=400,
                content={"error": "Uploaded file is empty."}
            )

        df = pd.read_csv(io.StringIO(contents.decode("utf-8")))

        if df.empty:
            return JSONResponse(
                status_code=400,
                content={"error": "CSV file contains no data."}
            )

        # --------------------------------------------------
        # Processing Pipeline
        # --------------------------------------------------
        schema = detect_schema(df)
        audit = run_audit(df)
        stats = compute_statistics(df)
        anomalies = detect_anomalies(df)
        patterns = detect_patterns(df)

        chart = recommend_chart(schema)
        chart_data = generate_chart_data(df, chart)

        insights = generate_insights(
            schema,
            audit,
            stats,
            anomalies["counts"] if isinstance(anomalies, dict) else anomalies,
            patterns
        )

        # Convert full dataframe rows
        processed_data = df.to_dict(orient="records")

        # --------------------------------------------------
        # Final Structured Response
        # --------------------------------------------------
        return {
            "schema": schema,
            "audit_report": audit,
            "summary_stats": stats,
            "patterns": patterns,
            "anomalies": anomalies,
            "recommended_chart": chart,
            "chart_data": chart_data,
            "processed_data": processed_data,
            "insights": insights,
        }

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": f"Processing failed: {str(e)}"}
        )