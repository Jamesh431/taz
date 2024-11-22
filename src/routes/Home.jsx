import { useRef, useState } from "react";

export default function Home() {
  const fileInputRef = useRef(null);

  const [isFileSelected, setIsFileSelected] = useState(false);
  const [fileName, setFileName] = useState("Select PDF");

  const handleInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (!isFileSelected) {
      const file = event.target.files[0];

      if (file) {
        setFileName(file.name);
        setIsFileSelected(true);
      }
    }
  };

  return (
    <div className="home-container">
      <h1>PDF ADHD Converter</h1>

      <h3>Want to excel in your reading?</h3>

      <div className="buttons-wrapper">
        <button onClick={handleInputClick}>
          <p>{fileName}</p>
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="application/pdf"
          style={{ display: "none" }}
        />

        <button onClick={() => null} disabled={!isFileSelected}>
          <p>Convert PDF</p>
        </button>
      </div>
    </div>
  );
}
