import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import MenuIcon from "@mui/icons-material/Menu";
import React, {  useEffect,useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../../../assets/images/Mediconnet.png";

import "./Navbar.css";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <nav className={`sticky top-0 z-50 transition-colors duration-300 backdrop-blur-md border-b border-gray-200 ${
        scrolled ? "bg-[#0e5ca9]/80" : "bg-[#0e5ca9]/100"
      }`}>
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
          className="text-gray-700 hover:text-blue-600 text-sm"
        >
          Home
        </NavLink>
        <NavLink
          to="#"
          className="text-gray-700 hover:text-blue-600 text-sm"
        >
          Specialities
        </NavLink>
        <NavLink
          to="#"
          className="text-gray-700 hover:text-blue-600 text-sm"
        >
          Health Professionals
        </NavLink>

        {/* About Us Dropdown */}
        <Menu as="div" className="relative">
          <div>
            <MenuButton
              className="flex items-center text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              About Us
              <ChevronDownIcon
                className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </MenuButton>
          </div>

          {isOpen && (
            <MenuItems className="absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5">
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Story
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    License
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Careers
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          )}
        </Menu>
      </div>

      {/* Right side - Auth Buttons */}
      <div className="flex items-center space-x-6">
        <NavLink
          to="/login"
          className="text-gray-700 hover:text-blue-600 text-sm"
        >
          Sign in
        </NavLink>
        <NavLink
          to="/register"
          className="text-gray-700 hover:text-blue-600 text-sm"
        >
          Create account
        </NavLink>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
