import React, { useState, useEffect } from 'react';
import './App.css';
import ImageUpload from './fileUpload/ImageUpload';
import ResumeUpload from './fileUpload/ResumeUpload';
import VideoUpload from './fileUpload/VideoUpload';

const App = () => {
  return (
    <div className="App">
      <h1>File Upload</h1>
      <div className="container">
        <div className="component">
          <ImageUpload />
        </div>
        <div className="component">
          <ResumeUpload />
        </div>
        <div className="component">
          <VideoUpload />
        </div>
      </div>
    </div>
  );
}

export default App;


