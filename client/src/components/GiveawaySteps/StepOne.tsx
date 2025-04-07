import React, { useState } from "react";
import { Camera } from "lucide-react";

const StepOne = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setFormData({ ...formData, image: null });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-16 bg-white mb-20">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-blue-600">
        Step 1: Giveaway Details
      </h2>
      
      <form className="space-y-4 md:space-y-1 w-full">
        {/* Giveaway Title */}
        <div className="w-full">
          <label
            htmlFor="title"
            className="block text-base md:text-lg font-medium mb-1 md:mb-2 text-gray-700"
          >
            Giveaway Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 md:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. Win a 1-Year Subscription"
            required
          />
          <p className="mt-1 text-xs md:text-sm text-gray-500">
            A catchy title will attract more participants
          </p>
        </div>
        
        {/* Giveaway Description */}
        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-base md:text-lg font-medium mb-1 md:mb-2 text-gray-700"
          >
            Giveaway Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 md:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            placeholder="Describe your giveaway in detail"
          />
          <p className="mt-1 text-xs md:text-sm text-gray-500">
            Include what participants can win and any important details
          </p>
        </div>
        
        {/* Image Upload */}
        <div className="w-full">
          <label
            htmlFor="image"
            className="block text-base md:text-lg font-medium mb-1 md:mb-2 text-gray-700"
          >
            Giveaway Image:
          </label>
          
          {!imagePreview ? (
            <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 flex flex-col items-center">
              <Camera className="h-8 w-8 md:h-12 md:w-12 text-gray-400" />
              <div className="mt-2 md:mt-4 flex flex-col md:flex-row items-center text-sm text-gray-600">
                <label
                  htmlFor="image-upload"
                  className="relative cursor-pointer bg-blue-50 rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none px-3 py-1 md:py-2 mb-2 md:mb-0"
                >
                  <span>Upload an image</span>
                  <input
                    id="image-upload"
                    name="image-upload"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleImageChange}
                  />
                </label>
                <p className="md:pl-1 md:pt-2">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                PNG, JPG, GIF up to 5MB
              </p>
            </div>
          ) : (
            <div className="mt-2 relative w-full">
              <img
                src={imagePreview}
                alt="Giveaway preview"
                className="h-48 md:h-64 w-full object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-red-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
          <p className="mt-1 text-xs md:text-sm text-gray-500">
            An attractive image will make your giveaway stand out
          </p>
        </div>

        {/* Navigation Buttons */}
             </form>
    </div>
  );
};

export default StepOne;
