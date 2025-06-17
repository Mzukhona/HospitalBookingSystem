import React from "react";

// Step 3: Registration Success Component
const RegistrationSuccess = ({ patientData }) => {
  return (
    <div className="user max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md text-center">
      <div className="mb-4">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Complete!</h2>
      <p className="text-gray-600 mb-6">
        Welcome, {patientData.firstName} {patientData.lastName}! Your patient account has been successfully created.
      </p>
      <button 
        onClick={() => window.location.href = '/dashboard'} // Adjust as needed
        className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Continue to Dashboard
      </button>
    </div>
  );
};

export default RegistrationSuccess;