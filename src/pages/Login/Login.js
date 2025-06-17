import React, { useState } from "react";
import "./Login.css";
import { Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ usernameOrEmail: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3045/api/auth/login",
        formData
      );
      setMessage("Login successful!");
      console.log(response.data);
      localStorage.setItem("token", response.data.token); // Assumes response returns { token: "..." }
      navigate("/patientDashboard");
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="container mt-5 mb-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="border p-4 rounded shadow loginForm" onSubmit={handleLogin}>
            <h3 className="text-center mb-4">Login</h3>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address or Username
              </label>
              <input
                name="usernameOrEmail"
                onChange={handleChange}
                value={formData.usernameOrEmail}
                required
                type="text"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>

            {message && <p className="mt-3 text-center">{message}</p>}

            <div className="text-center mt-3">
              <Nav.Link as={NavLink} to="/register" className="text-white">
                Don't have an account?{" "}
                <span className="text-decoration-underline">Register here</span>
              </Nav.Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
