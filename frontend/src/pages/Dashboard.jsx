import { useState } from "react";
import Upload from "../components/Upload";
import AuditPanel from "../components/AuditPanel";
import SummaryStats from "../components/SummaryStats";
import ChartPanel from "../components/ChartPanel";
import InsightPanel from "../components/InsightPanel";
import ExportPDF from "../components/ExportPDF";

function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);

  const handleGenerate = () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      setAnalysisData({
        schema: {
          numeric_columns: ["sales"],
          categorical_columns: ["state"],
          date_columns: ["year"]
        },
        audit_report: {
          missing_percentage: "2%",
          duplicate_rows: 1
        },
        summary_stats: {
          mean: 245,
          max: 500,
          min: 100
        },
        recommended_chart: {
          type: "line",
          x: "year",
          y: "sales",
          data: [
            { year: 2020, sales: 200 },
            { year: 2021, sales: 300 },
            { year: 2022, sales: 450 }
          ]
        },
        insights: [
          "Sales show consistent upward growth.",
          "2022 recorded the highest value.",
          "Minor missing data detected."
        ]
      });

      setIsAnalyzing(false);
    }, 800);
  };

  return (
    <div className="app-container">
      {analysisData === null ? (
        <div className="hero-layout">
          <div className="hero-left">
            <h1 className="brand-main">NIRIKSHAN</h1>
            <div className="hero-accent"></div>
            <p className="hero-subtitle">
              Observe. Analyze. Decide.
            </p>
            <p className="hero-description">
              Transform raw datasets into structured,
              decision-ready intelligence instantly.
            </p>
          </div>

          <div className="hero-right">
            <Upload onUpload={(file) => setSelectedFile(file)} />

            {selectedFile && !isAnalyzing && (
              <div className="action-card">
                <div className="file-label">Selected File</div>
                <div className="file-name">{selectedFile.name}</div>
                <button
                  className="generate-button"
                  onClick={handleGenerate}
                >
                  Generate Analysis
                </button>
              </div>
            )}

            {isAnalyzing && (
              <div className="loading-section">
                <div className="spinner"></div>
                <p>Analyzing dataset...</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="dashboard-content">
          <AuditPanel data={analysisData} />
          <SummaryStats data={analysisData} />
          <ChartPanel data={analysisData} />
          <InsightPanel data={analysisData} />
          <ExportPDF />
        </div>
      )}
    </div>
  );
}

export default Dashboard;