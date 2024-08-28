import React, { useState } from "react";
import axios from "axios";
import "./Upload.css";

const ImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleUpload = () => {
    if (files.length === 0) {
      setMessage("Please select at least one image to upload.");
      setMessageType("error");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    axios
      .post("http://localhost:3000/file/images", formData)
      .then((response) => {
        setMessage("Images uploaded successfully.");
        setMessageType("success");
      })
      .catch((error) => {
        setMessage(
          `Error: ${
            error.response ? error.response.data.message : error.message
          }`
        );
        setMessageType("error");
      });
  };

  return (
    <div className="container">
      <h2>Upload Images</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Images</button>
      {message && <p className={`message ${messageType}`}>{message}</p>}
    </div>
  );
};

export default ImageUpload;
