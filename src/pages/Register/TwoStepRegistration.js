import React, { useState } from "react";
import UserRegistration from "./UserRegistration";
import PatientRegistration from "./PatientRegistration";
import RegistrationSuccess from "./RegistrationSuccess";
import './UserRegistration.css';

// Main Two-Step Registration Component
const TwoStepRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userInfo, setUserInfo] = useState(null);
  const [patientData, setPatientData] = useState(null);

  const handleUserRegistered = (userData) => {
    setUserInfo(userData);
    setCurrentStep(2);
  };

  const handlePatientRegistered = (patient) => {
    setPatientData(patient);
    setCurrentStep(3);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <UserRegistration onUserRegistered={handleUserRegistered} />;
      case 2:
        return (
          <PatientRegistration 
            userInfo={userInfo} 
            onPatientRegistered={handlePatientRegistered}
            onBack={handleBack}
          />
        );
      case 3:
        return <RegistrationSuccess patientData={patientData} />;
      default:
        return <UserRegistration onUserRegistered={handleUserRegistered} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Progress Indicator */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {step < currentStep ? '✓' : step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-0.5 ${
                    step < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Account</span>
            <span>Details</span>
            <span>Complete</span>
          </div>
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default TwoStepRegistration;