import React from 'react';
import { Link } from 'react-router-dom';
import { Skull } from 'lucide-react';

const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      <div className="glowing-eyes absolute top-1/4 left-1/4"></div>
      <div className="glowing-eyes absolute top-1/3 right-1/4"></div>
      <h1 className="text-6xl font-bold mb-8 spooky-text animate-pulse">
        Shared Nightmare Generator
      </h1>
      <Link
        to="/upload"
        className="bone-button text-2xl py-4 px-8 rounded-lg flex items-center"
      >
        <Skull className="mr-2" />
        <span>Start Your Nightmare</span>
      </Link>
    </div>
  );
};

export default HomeScreen;