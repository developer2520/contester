import React from 'react';
import { Gift } from 'lucide-react';
import {Link} from 'react-router-dom'

const GiveawayCreation = () => {
  return (
    <div className="flex bg-gray-100 rounded-3xl flex-col items-center justify-center p-8 w-[90%] mx-auto text-center mt-7">
      {/* Prize icon in a circle */}
      <div className="bg-gray-200 rounded-full p-8 mb-8">
        <Gift size={48} className="text-black" />
      </div>
      
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6">Create Your Own Giveaway</h1>
      
      {/* Description text */}
      <p className="text-gray-500 text-xl mb-8">
        You're participating in giveaways, but haven't created any yet. 
        Start your own giveaway to grow your community!
      </p>
      
      {/* Create Giveaway button */}
      <Link to="/create" className="bg-black text-white py-4 px-6 text-xl rounded-md hover:bg-gray-800 transition-colors">
        Create Giveaway
      </Link>
    </div>
  );
};

export default GiveawayCreation;
