import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import logoImage from '../../../assets/images/Mediconnet.png'

import "./Navbar.css";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full nav z-50 relative">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <nav className=" flex ">
          <div className="pr-4 icons">
            <MenuIcon
              onClick={toggleSidebar}
              className={`menu-icon h-6 w-6 text-gray-700 hover:text-blue-500 cursor-pointer ${
                isSidebarOpen ? "hidden" : "block"
              }`}
            />
          </div>

          <img src={logoImage} alt="Logo" className="h-8 w-9 mr-2" />

        </nav>
        <div className="flex items-center space-x-6">
          <NavLink
            to="/home"
            className="text-white-700 hover:text-gray-900 text-sm"
          >
            Home
          </NavLink>
          <NavLink
            to="#"
            className="text-white-700 hover:text-gray-900 text-sm"
          >
            Specialities
          </NavLink>
          <NavLink
            to="#"
            className="text-white-700 hover:text-gray-900 text-sm"
          >
            Health Profetionals
          </NavLink>
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                {/* Simplified button with no styling */}
                <MenuButton
                  className="flex items-center text-white-700 hover:text-gray-900"
                  onClick={toggleMenu}
                >
                  About Us
                  <ChevronDownIcon
                    className={`ml-1 h-4 w-4 transition-transform hover:text-gray-900 duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              {/* Menu items will show on hover or click */}
              {isOpen && (
                <MenuItems
                  static
                  className="absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Our Story
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Support
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        to="#"
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
        </div>
        {/* Right side - User actions */}
        <div className="flex items-center space-x-6">
          <NavLink
            to="/login"
            className="text-white-700 hover:text-gray-900 text-sm"
          >
            Sign in
          </NavLink>
          <NavLink
            to="/register"
            className="text-white-700 hover:text-gray-900 text-sm"
          >
            Create account
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
