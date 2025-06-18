import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoImage from "../../../assets/images/Mediconnet.png";
import { useAuth } from "../../../pages/Auth/AuthProvider";

import "./Navbar.css";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const { authState, logout } = useAuth();
  const navigate = useNavigate(); // Fixed: use useNavigate hook

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/login"); // Fixed: use navigate function
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Debug: Add console log to check auth state
  console.log("Auth State:", authState);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 backdrop-blur-md border-b border-gray-200 ${
        scrolled ? "bg-[#0e5ca9]/80" : "bg-[#0e5ca9]/100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between">
          {/* Left side - Logo and Menu Icon */}
          <div className="flex items-center">
            <MenuIcon
              onClick={toggleSidebar}
              className={`h-6 w-6 text-gray-700 hover:text-blue-500 cursor-pointer mr-4 ${
                isSidebarOpen ? "hidden" : "block"
              }`}
            />
            <img src={logoImage} alt="Logo" className="h-8 w-9 mr-2" />
          </div>

          {/* Center - Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/home"
              className="text-white hover:text-blue-200 text-sm font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="#"
              className="text-white hover:text-blue-200 text-sm font-medium"
            >
              Specialities
            </NavLink>
            <NavLink
              to="#"
              className="text-white hover:text-blue-200 text-sm font-medium"
            >
              Health Professionals
            </NavLink>

            {/* About Us Dropdown */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex items-center text-white hover:text-blue-200 font-medium">
                  About Us
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="story"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Our Story
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="#"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Support
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="#"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        License
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/positions"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Careers
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>

          {/* Right side - Auth Buttons - Fixed Structure */}
          <div className="flex items-center space-x-4">
            {!authState.isAuthenticated ? (
              <>
                <NavLink 
                  to="/login" 
                  className="text-white hover:text-blue-200 text-sm font-medium px-3 py-2 rounded-md border border-white/30 hover:border-white/50 transition-colors"
                >
                  Sign In
                </NavLink>
                <NavLink 
                  to="/register" 
                  className="bg-white text-blue-600 hover:bg-blue-50 text-sm font-medium px-4 py-2 rounded-md transition-colors"
                >
                  Create Account
                </NavLink>
              </>
            ) : (
              <>
                {/* User Profile Dropdown */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center text-white hover:text-blue-200 font-medium">
                      👤 {authState.user?.name || "Profile"}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </Menu.Button>
                  </div>

                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/update-profile"
                            className={`block px-4 py-2 text-sm ${
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                            }`}
                          >
                            Update Profile
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/patientDashboard"
                            className={`block px-4 py-2 text-sm ${
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                            }`}
                          >
                            Dashboard
                          </NavLink>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Menu>

                <button
                  onClick={handleLogout}
                  className="text-white hover:text-blue-200 text-sm font-medium px-3 py-2 rounded-md border border-white/30 hover:border-white/50 transition-colors"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;