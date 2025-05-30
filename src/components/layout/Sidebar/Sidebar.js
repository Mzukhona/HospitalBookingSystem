import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import React, { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar,sidebarRef }) => {
  
  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>

      {isOpen && (
        <div
          className="sidebar-flow offcanvas offcanvas-start show"
          style={{ visibility: "visible" }}
        >
          <div className="offcanvas-header">
            <button className="btn-close" onClick={toggleSidebar}></button>
          </div>
          <div className="offcanvas-body">
            <ol>
                <li className="sidebarList"><NavLink>Frequently Asked Questions</NavLink></li>
                <li className="sidebarList"><NavLink>Health Resources</NavLink></li>
                <li className="sidebarList"><NavLink>More listed Service</NavLink></li>
                <li className="sidebarList"><NavLink>News & Events</NavLink></li>
                <li className="sidebarList"><NavLink to='/contact'>Contact Us</NavLink></li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
