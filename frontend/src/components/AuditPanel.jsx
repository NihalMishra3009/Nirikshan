function AuditPanel({ data }) {
  return (
    <div className="section-card">
      <div className="section-title">Data Quality Audit</div>
      <p>Missing Values: {data.audit_report.missing_percentage}</p>
      <p>Duplicate Rows: {data.audit_report.duplicate_rows}</p>
    </div>
  );
}

export default AuditPanel;