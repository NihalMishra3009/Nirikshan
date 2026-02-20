function SummaryStats({ data }) {
  if (!data) return null;

  return (
    <div className="section-card">
      <div className="section-title">Statistical Summary</div>
      <p>Mean: {data.summary_stats.mean}</p>
      <p>Max: {data.summary_stats.max}</p>
      <p>Min: {data.summary_stats.min}</p>
    </div>
  );
}

export default SummaryStats;