import { useState } from "react";
import axios from "axios";
import Upload from "../components/Upload";
import AuditPanel from "../components/AuditPanel";
import SummaryStats from "../components/SummaryStats";
import ChartPanel from "../components/ChartPanel";
import InsightPanel from "../components/InsightPanel";
import SchemaPanel from "../components/SchemaPanel";

function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setError("");
    setLoadingMessage("Uploading and analyzing dataset...");

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        "http://localhost:8000/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (response.data.error) {
        setError(response.data.error);
        setIsAnalyzing(false);
        return;
      }

      setAnalysisData(response.data);
      setIsAnalyzing(false);

    } catch (err) {
      setError("Server error. Please check backend.");
      setIsAnalyzing(false);
    }
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
                <p>{loadingMessage}</p>
              </div>
            )}

            {error && (
              <div style={{ marginTop: "20px", color: "red" }}>
                {error}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="dashboard-content">

          <div className="top-row">
            <AuditPanel data={analysisData} />
            <SummaryStats data={analysisData} />
          </div>

          <SchemaPanel data={analysisData} />

          <div className="chart-row">
            <ChartPanel data={analysisData} />
          </div>

          <div className="insight-row">
            <InsightPanel data={analysisData} />
          </div>

        </div>
      )}
    </div>
  );
}

export default Dashboard;