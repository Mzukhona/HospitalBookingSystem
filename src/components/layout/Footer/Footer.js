import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} MediConnect. All rights reserved.</p>
            <p>Follow us on social media:</p>
            <div className="flex justify-center space-x-4">
            <NavLink href="#" className="text-gray-400 hover:text-white">Facebook</NavLink>
            <NavLink href="#" className="text-gray-400 hover:text-white">Twitter</NavLink>
            <NavLink href="#" className="text-gray-400 hover:text-white">Instagram</NavLink>
            </div>
           
        </div>
        </footer>
    );
}

export default Footer;