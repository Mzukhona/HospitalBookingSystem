import React, { useState } from "react";

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
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default UserRegistration;