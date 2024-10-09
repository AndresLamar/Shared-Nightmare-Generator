import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Ghost } from 'lucide-react';

const ImageUploadScreen: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        navigate('/create');
      }
    }, 200);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl mb-8 spooky-text">Upload Your Soul</h2>
      <div
        className={`w-96 h-96 border-4 border-dashed rounded-lg flex flex-col items-center justify-center ${
          isDragging ? 'border-red-500' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Ghost className="w-16 h-16 mb-4" />
        <p className="text-xl mb-4">Drag your nightmare essence here...</p>
        <Upload className="w-8 h-8" />
      </div>
      {uploadProgress > 0 && (
        <div className="w-96 mt-8">
          <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-600"
              style={{ width: `${uploadProgress}%`, transition: 'width 0.2s ease-out' }}
            ></div>
          </div>
          <p className="text-center mt-2">Consuming your fears... {uploadProgress}%</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploadScreen;