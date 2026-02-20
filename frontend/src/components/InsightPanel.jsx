function InsightPanel({ data }) {
  return (
    <div className="section-card">
      <div className="section-title">Generated Insights</div>

      <ul style={{ marginBottom: "20px" }}>
        {data.insights.map((insight, index) => (
          <li key={index}>{insight}</li>
        ))}
      </ul>

      <div style={{ textAlign: "right" }}>
        <button className="generate-button">
          Download Full Report
        </button>
      </div>
    </div>
  );
}

export default InsightPanel;