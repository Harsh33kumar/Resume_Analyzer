import React from "react";

function Resume() {
  const [file, setFile] = React.useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
    // Handle file upload logic here (e.g., send to backend for analysis)
    console.log("File uploaded:", file);
  };
  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload a resume file before analyzing.");
      return;
    }
    // Implement analysis logic here (e.g., send file to backend and display results)
    console.log("Analyzing file:", file);
  };

  return (
    <div className="ra_resume_container">
  <div className="ra_resume_left">
    <h2>Welcome to Resume Analyzer</h2>
    <p>
      Our tool helps you optimize your resume for better job opportunities.
    </p>
    <p>
      Upload your resume in PDF or Word format and get instant feedback on
      how to improve it.
    </p>
  </div>

  <div className="ra_resume_right">
    <h2>Resume Analyzer</h2>
    <p>Upload your resume and get insights on how to improve it.</p>

    <input
      type="file"
      accept=".pdf,.doc,.docx"
      onChange={handleFileUpload}
    />

    {file && <p>Selected file: {file.name}</p>}

    <button onClick={handleAnalyze}>Analyze</button>
  </div>
</div>
  );
}

export default Resume;
