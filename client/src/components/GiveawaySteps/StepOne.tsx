import React from "react";

const StepOne = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Step 1: Giveaway Details</h2>
      <label className="block mb-2">
        Giveaway Title:
        <input type="text" className="w-full border p-2 rounded mt-1" />
      </label>
      <label className="block mb-2">
        Description:
        <textarea className="w-full border p-2 rounded mt-1" rows={3}></textarea>
      </label>
    </div>
  );
};

export default StepOne;
