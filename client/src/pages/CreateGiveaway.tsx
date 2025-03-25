import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  
  // Vibration function for haptic feedback
  const vibrate = () => {
    if (window?.Telegram?.WebApp?.HapticFeedback) {
      Telegram.WebApp.HapticFeedback.impactOccurred("light");
    }
  };

  // Step content with animations
  const renderStepContent = () => {
    const components = [
      <StepOne key="step1" />, 
      <StepTwo key="step2" />, 
      <StepThree key="step3" />, 
      <StepFour key="step4" />
    ];

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={`step-${step}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {components[step - 1]}
        </motion.div>
      </AnimatePresence>
    );
  };

  // Progress indicator
  const progressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <motion.div
        className="bg-blue-500 h-2 rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: `${(step / 4) * 100}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-white w-full">
      {/* Content Section */}
      <div className="w-full mx-auto p-6 rounded shadow-lg flex-grow">
        <h1 className="text-2xl font-bold mb-4 text-center">Create a Giveaway</h1>
        {progressBar()}
        <div className="mb-6">
          {renderStepContent()}
        </div>
      </div>
      
      {/* Navigation Buttons Fixed at the Bottom */}
      <div
        className={`
          fixed bottom-18 left-0 w-full bg-white p-4 flex max-w-lg mx-auto items-center 
          ${step === 1 ? "justify-center" : "justify-between"}
        `}
      >
        {/* Back Button - Only visible when step > 1 */}
        {step > 1 && (
          <motion.button
            initial={{ scale: 0.8 , opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              prevStep();
              vibrate();
            }}
            className="bg-gray-300 rounded h-12 w-24 text-center"
          >
            Back
          </motion.button>
        )}

        {/* Next/Finish Button */}
        <motion.button
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.9, y: 2 }}
          onClick={() => {
            if (step < 4) {
              nextStep();   
              vibrate();
            }
          }}
          disabled={step === 4}
          className={`
            ${step === 4 ? "bg-green-500" : "bg-[#50A7EA]"} 
            text-white rounded h-12 disabled:opacity-50
            ${step === 1 ? "flex-grow" : "w-24"}
          `}
        >
          {step === 4 ? "Finish" : "Next"}
        </motion.button>
      </div>
    </div>
  );
};

export default GiveawayForum;
