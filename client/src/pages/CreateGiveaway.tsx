import { useState } from "react";
import StepOne from "../components/GiveawaySteps/StepOne";
import StepTwo from "../components/GiveawaySteps/StepTwo";
import StepThree from "../components/GiveawaySteps/StepThree";
import StepFour from "../components/GiveawaySteps/StepFour";

const GiveawayForum = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Content Section */}
      <div className="max-w-lg mx-auto p-6 border rounded shadow-lg flex-grow">
        <h1 className="text-2xl font-bold mb-4 text-center">Create a Giveaway</h1>
        <div className="mb-6">
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          {step === 4 && <StepFour />}
        </div>
      </div>

      {/* Navigation Buttons Fixed at the Bottom */}
      <div className="fixed bottom-18 left-0 w-full bg-white p-4 border-t flex justify-between max-w-lg mx-auto">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={step === 4}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {step === 4 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default GiveawayForum;
