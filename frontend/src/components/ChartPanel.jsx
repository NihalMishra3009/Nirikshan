import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";

function ChartPanel({ data }) {
  if (!data || !data.recommended_chart || !data.chart_data) return null;

  const { type, x_axis, y_axis } = data.recommended_chart;
  const chartData = data.chart_data;

  return (
    <div className="section-card">
      <div className="section-title">Recommended Chart</div>

      {type === "line" && (
        <LineChart width={900} height={350} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={x_axis} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={y_axis} stroke="#01257D" strokeWidth={3} />
        </LineChart>
      )}

      {type === "bar" && (
        <BarChart width={900} height={350} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={x_axis} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={y_axis} fill="#01257D" />
        </BarChart>
      )}

      {type === "histogram" && (
        <BarChart width={900} height={350} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bin" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#01257D" />
        </BarChart>
      )}
    </div>
  );
}

export default ChartPanel;