function SchemaPanel({ data }) {
  if (!data || !data.schema) return null;

  const {
    numeric_columns = [],
    categorical_columns = [],
    date_columns = []
  } = data.schema;

  return (
    <div className="section-card">
      <div className="section-title">Schema Detection</div>

      <div style={{ display: "flex", gap: "60px" }}>
        <div>
          <strong>Numeric Columns</strong>
          <ul>
            {numeric_columns.length > 0 ? (
              numeric_columns.map((col, i) => (
                <li key={i}>{col}</li>
              ))
            ) : (
              <li>None detected</li>
            )}
          </ul>
        </div>

        <div>
          <strong>Categorical Columns</strong>
          <ul>
            {categorical_columns.length > 0 ? (
              categorical_columns.map((col, i) => (
                <li key={i}>{col}</li>
              ))
            ) : (
              <li>None detected</li>
            )}
          </ul>
        </div>

        <div>
          <strong>Date Columns</strong>
          <ul>
            {date_columns.length > 0 ? (
              date_columns.map((col, i) => (
                <li key={i}>{col}</li>
              ))
            ) : (
              <li>None detected</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchemaPanel;