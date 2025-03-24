import React from "react";

const StepThree = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Step 3: Giveaway Rules</h2>
      <label className="block mb-2">
        Entry Requirements:
        <input type="text" className="w-full border p-2 rounded mt-1" />
      </label>
      <label className="block mb-2">
        Start Date:
        <input type="date" className="w-full border p-2 rounded mt-1" />
      </label>
      <label className="block mb-2">
        End Date:
        <input type="date" className="w-full border p-2 rounded mt-1" />
      </label>
    </div>
  );
};

export default StepThree;
