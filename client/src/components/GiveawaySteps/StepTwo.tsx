import React from "react";

const StepTwo = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Step 2: Choose Winners</h2>
      <label className="block mb-2">
        Number of Winners:
        <input type="number" className="w-full border p-2 rounded mt-1" />
      </label>
    </div>
  );
};

export default StepTwo;
