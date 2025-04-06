import React from "react";

const StepOne = () => {
  return (
    <div className="p-1 bg-white w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Step 1: Giveaway Details
      </h2>

      <form className="space-y-6">
        {/* Giveaway Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium mb-2 text-gray-700"
          >
            Giveaway Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. Win a 1-Year Subscription"
            required
          />
        </div>

        {/* Giveaway Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-lg font-medium mb-2 text-gray-700"
          >
            Giveaway Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            placeholder="Describe your giveaway in detail"
          />
        </div>
        <h2>00001212</h2> 
      </form>
    </div>
  );
};

export default StepOne; 
