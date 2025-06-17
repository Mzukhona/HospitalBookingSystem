import React, { useState } from "react";

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
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
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

export default PatientRegistration;