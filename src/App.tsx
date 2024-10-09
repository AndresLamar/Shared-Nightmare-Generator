import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ImageUploadScreen from './components/ImageUploadScreen';
import NightmareCreationScreen from './components/NightmareCreationScreen';
import FinalScreen from './components/FinalScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white haunted-bg">
        <div className="fog"></div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/upload" element={<ImageUploadScreen />} />
          <Route path="/create" element={<NightmareCreationScreen />} />
          <Route path="/final" element={<FinalScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;