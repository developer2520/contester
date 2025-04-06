import React, { useState } from "react";

const StepThree = () => {
  const [formData, setFormData] = useState({
    endDate: "",
    endTime: "",
    winnerCount: "",
    // Random selection is set by default and not changeable
    winnerSelection: "random"
  });
            
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-1 bg-white w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Step 3: Giveaway Schedule & Winners
      </h2>
      <form className="space-y-6">
        {/* End Date and Time */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">
            End Date and Time:
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        
        {/* Number of Winners */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">
            Number of Winners:
          </label>
          <input
            type="number"
            name="winnerCount"
            min="1"
            value={formData.winnerCount}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. 5"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default StepThree;
