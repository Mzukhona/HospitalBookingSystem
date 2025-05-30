import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".menu-icon") // make sure MenuIcon has this class
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className='fixed-top' toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          sidebarRef={sidebarRef}
        />
        <main className="flex-1 bg-gray-100 " style={{
            marginLeft: isSidebarOpen ? "250px" : "0",
            transition: "margin 0.3s ease",
          }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
