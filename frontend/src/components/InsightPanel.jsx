function InsightPanel({ data }) {
  return (
    <div className="section-card">
      <div className="section-title">Generated Insights</div>
      <ul>
        {data.insights.map((insight, index) => (
          <li key={index}>{insight}</li>
        ))}
      </ul>
    </div>
  );
}

export default InsightPanel;