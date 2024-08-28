import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css';

const ResumeUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) {
            setMessage('Please select a resume to upload.');
            setMessageType('error');
            return;
        }

        const formData = new FormData();
        formData.append('document', file);

        axios.post('http://localhost:3000/file/documents', formData)
            .then(response => {
                setMessage('Resume uploaded successfully.');
                setMessageType('success');
            })
            .catch(error => {
                setMessage(`Error: ${error.response ? error.response.data.message : error.message}`);
                setMessageType('error');
            });
    };

    return (
        <div className="container">
            <h2>Upload Resume</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Resume</button>
            {message && <p className={`message ${messageType}`}>{message}</p>}
        </div>
    );
};

export default ResumeUpload;
