import React, { useState } from "react";
import './UserRegistration.css';

// Step 1: User Registration Component
const UserRegistration = ({ onUserRegistered }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    UserType: "PATIENT" // Automatically set to PATIENT
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      console.log("Sending registration request:", formData);
      
      const response = await fetch("http://localhost:3045/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error("Server error:", errorData);
        throw new Error(errorData || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Registration response:", data);
      
      // Check different possible response structures
      const jwt = data.jwt || data.token || data.accessToken || data;
      
      if (!jwt) {
        console.error("No JWT token found in response:", data);
        // If no JWT token, we can still proceed to step 2 without it
        // The patient registration might work with a different auth mechanism
      }
      
      // Store token for subsequent requests if available
      if (jwt && typeof jwt === 'string') {
        localStorage.setItem('token', jwt);
      }
      
      // Try to decode JWT to get user ID (optional)
      let userId = null;
      if (jwt && typeof jwt === 'string' && jwt.includes('.')) {
        try {
          const base64Url = jwt.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          
          const tokenData = JSON.parse(jsonPayload);
          console.log("Decoded JWT:", tokenData);
          userId = tokenData.sub || tokenData.userId || tokenData.id;
        } catch (jwtError) {
          console.warn("Could not decode JWT:", jwtError);
          // If JWT decoding fails, we can still proceed without userId
        }
      }
      
      onUserRegistered({ 
        userId, 
        jwt, 
        userInfo: {
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber
        }
      });
    } catch (error) {
      console.error("Registration error:", error);
      
      // Handle different types of errors
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setError("Unable to connect to server. Please check if the backend is running on http://localhost:3045");
      } else if (error.message.includes('CORS')) {
        setError("CORS error: Server needs to allow requests from this origin");
      } else {
        setError(error.message || "Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="user max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Account</h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Step 1 of 2: Basic Information
      </p>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          <div className="font-medium">Registration Error:</div>
          <div className="text-sm mt-1">{error}</div>
          <div className="text-xs mt-2 text-red-600">
            <strong>Troubleshooting:</strong>
            <ul className="list-disc list-inside mt-1">
              <li>Ensure your backend server is running on http://localhost:3045</li>
              <li>Check if CORS is properly configured in your Spring Boot application</li>
              <li>Verify the API endpoint path is correct</li>
            </ul>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password *
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            minLength={6}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? "Creating Account..." : "Continue to Patient Details"}
        </button>
      </form>
    </div>
  );
};

// Step 2: Patient Registration Component
const PatientRegistration = ({ userInfo, onPatientRegistered, onBack }) => {
  const [formData, setFormData] = useState({
    idNumber: "",
    healthInsuranceNumber: "",
    bloodType: "",
    allergies: "",
    dateOfBirth: "",
    gender: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    // Pre-populate with user info
    email: userInfo.userInfo.email,
    firstName: userInfo.userInfo.firstName,
    lastName: userInfo.userInfo.lastName,
    phoneNumber: userInfo.userInfo.phoneNumber
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const genders = ["Male", "Female", "Other", "Prefer not to say"];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      console.log("Sending patient registration data:", formData);
      console.log("Using JWT token:", userInfo.jwt);
      
      const headers = {
        'Content-Type': 'application/json'
      };
      
      // Only add Authorization header if JWT token exists
      if (userInfo.jwt && typeof userInfo.jwt === 'string') {
        headers['Authorization'] = `Bearer ${userInfo.jwt}`;
      }
      
      // Try the primary endpoint first
      let response;
      try {
        response = await fetch("http://localhost:3045/api/patients/register", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(formData)
        });
      } catch (fetchError) {
        console.log("Primary endpoint failed, trying alternative endpoints...");
        
        // Try alternative endpoint paths
        const alternativeEndpoints = [
          "http://localhost:3045/api/patient/register"
        ];
        
        for (const endpoint of alternativeEndpoints) {
          try {
            console.log(`Trying endpoint: ${endpoint}`);
            response = await fetch(endpoint, {
              method: "POST",
              headers: headers,
              body: JSON.stringify(formData)
            });
            if (response.ok) {
              console.log(`Success with endpoint: ${endpoint}`);
              break;
            }
          } catch (e) {
            console.log(`Failed with endpoint: ${endpoint}`);
            continue;
          }
        }
        
        if (!response) {
          throw fetchError;
        }
      }
      
      console.log("Patient registration response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error("Patient registration server error:", errorData);
        throw new Error(errorData || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Patient registration success:", data);
      onPatientRegistered(data);
    } catch (error) {
      console.error("Patient registration error:", error);
      
      // Handle different types of errors
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setError(`Connection failed: ${error.message}. The patient registration endpoint might not exist or the server might be down.`);
      } else if (error.message.includes('CORS')) {
        setError("CORS error: Server needs to allow requests for the patient endpoint");
      } else {
        setError(error.message || "Patient registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="user max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Patient Details</h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Step 2 of 2: Medical Information
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          <div className="font-medium">Patient Registration Error:</div>
          <div className="text-sm mt-1">{error}</div>
          <div className="text-xs mt-2 text-red-600">
            <strong>Troubleshooting:</strong>
            <ul className="list-disc list-inside mt-1">
              <li>Check if the patient registration endpoint (/api/patients/register) exists</li>
              <li>Verify that your PatientController is properly mapped</li>
              <li>Ensure the JWT token from step 1 is valid</li>
              <li>Check backend logs for validation errors</li>
            </ul>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ID Number *
            </label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Health Insurance Number
            </label>
            <input
              type="text"
              name="healthInsuranceNumber"
              value={formData.healthInsuranceNumber}
              onChange={handleChange}
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth *
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block  text-black text-sm font-medium text-gray-700 mb-1">
              Gender *
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Gender</option>
              {genders.map(gender => (
                <option key={gender} value={gender}>{gender}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Type
            </label>
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Blood Type</option>
              {bloodTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-black text-sm font-medium text-gray-700 mb-1">
              Emergency Contact Name *
            </label>
            <input
              type="text"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emergency Contact Phone *
            </label>
            <input
              type="tel"
              name="emergencyContactPhone"
              value={formData.emergencyContactPhone}
              onChange={handleChange}
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block   text-sm font-medium text-gray-700 mb-1">
            Allergies
          </label>
          <textarea
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="List any known allergies..."
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
          >
            {isLoading ? "Completing Registration..." : "Complete Registration"}
          </button>
        </div>
      </form>
    </div>
  );
};

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