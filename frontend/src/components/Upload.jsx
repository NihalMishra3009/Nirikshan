function Upload({ onUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onUpload) {
      onUpload(file);
    }
  };

  return (
    <div className="upload-card">
      <div className="upload-title">
        Upload Your CSV File
      </div>

      <label className="upload-button">
        Choose File
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </label>
    </div>
  );
}

export default Upload;