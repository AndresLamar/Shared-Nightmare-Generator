import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Skull, RotateCcw, Users } from 'lucide-react';

const NightmareCreationScreen: React.FC = () => {
  const [collaborators, setCollaborators] = useState(1);
  const navigate = useNavigate();

  const handleAddHorror = () => {
    // Simulate adding horror elements
    console.log('Adding more horrors...');
  };

  const handleUndoCurse = () => {
    // Simulate undoing last action
    console.log('Undoing curse...');
  };

  const handleFinalize = () => {
    navigate('/final');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl mb-8 spooky-text">Craft Your Nightmare</h2>
      <div className="w-96 h-96 bg-gray-800 rounded-lg mb-8 relative overflow-hidden">
        {/* Placeholder for the image creation area */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl text-red-500">Your nightmare manifests here...</p>
        </div>
      </div>
      <div className="flex space-x-4 mb-8">
        <button
          className="bone-button py-2 px-4 rounded-lg flex items-center"
          onClick={handleAddHorror}
        >
          <Skull className="mr-2" />
          <span>Add More Horrors</span>
        </button>
        <button
          className="bone-button py-2 px-4 rounded-lg flex items-center"
          onClick={handleUndoCurse}
        >
          <RotateCcw className="mr-2" />
          <span>Undo Curse</span>
        </button>
      </div>
      <div className="flex items-center mb-8">
        <Users className="mr-2" />
        <span>{collaborators} tortured soul{collaborators > 1 ? 's' : ''} collaborating</span>
      </div>
      <div className="w-96 h-32 bg-gray-800 rounded-lg p-4 mb-8">
        <p className="text-sm mb-2">Whispers from beyond:</p>
        <div className="h-20 overflow-y-auto">
          <p className="ghostly-text">The shadows grow longer...</p>
          <p className="ghostly-text">I sense a presence...</p>
          <p className="ghostly-text">The veil between worlds thins...</p>
        </div>
      </div>
      <button
        className="bone-button py-2 px-4 rounded-lg text-xl"
        onClick={handleFinalize}
      >
        Seal Your Fate
      </button>
    </div>
  );
};

export default NightmareCreationScreen;