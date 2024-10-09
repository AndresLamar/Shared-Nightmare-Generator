import React from 'react';
import { Share2 } from 'lucide-react';

const FinalScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl mb-8 spooky-text">Your Nightmare Incarnate</h2>
      <div className="w-96 h-96 haunted-frame relative overflow-hidden mb-8">
        {/* Placeholder for the final nightmare image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl text-red-500 twitching">Your abomination lives...</p>
        </div>
      </div>
      <button className="bone-button py-2 px-4 rounded-lg flex items-center text-xl">
        <Share2 className="mr-2" />
        <span>Share Your Monstrous Creation</span>
      </button>
    </div>
  );
};

export default FinalScreen;