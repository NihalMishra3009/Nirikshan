import Upload from "../components/Upload";
import AuditPanel from "../components/AuditPanel";
import SummaryStats from "../components/SummaryStats";
import ChartPanel from "../components/ChartPanel";
import InsightPanel from "../components/InsightPanel";
import ExportPDF from "../components/ExportPDF";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Nirikshan Dashboard</h1>

      <Upload />
      <AuditPanel />
      <SummaryStats />
      <ChartPanel />
      <InsightPanel />
      <ExportPDF />
    </div>
  );
}

export default Dashboard;