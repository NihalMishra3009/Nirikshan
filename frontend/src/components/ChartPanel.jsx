import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function ChartPanel({ data }) {
  const chart = data.recommended_chart;

  return (
    <div className="section-card">
      <div className="section-title">Recommended Chart</div>

      <LineChart width={600} height={300} data={chart.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={chart.x} />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={chart.y}
          stroke="#01257D"
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
}

export default ChartPanel;