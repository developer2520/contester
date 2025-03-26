import React from 'react'
const StepOne = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Step 1: Giveaway Details</h2>
      
      <label className="block mb-2">
        Giveaway Title:
        <input 
          type="text" 
          className="w-full border p-2 rounded mt-1" 
          placeholder="e.g. Win a 1-Year Telegram Premium Subscription!" 
        />
      </label>
      
      <label className="block mb-2">
        <textarea 
          className="w-full border p-2 rounded mt-1" 
          rows={3} 
          placeholder="Describe your giveaway. e.g. Get a chance to win Telegram Premium for free! The winner will be selected randomly."
        />
      </label>
    </div>
  );
};

export default StepOne;
