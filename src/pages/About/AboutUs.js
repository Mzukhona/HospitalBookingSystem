import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Mediconnet</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming healthcare through technology and compassion
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6">
            <h2 className="text-3xl font-bold text-center">Our Story</h2>
          </div>
          <div className="p-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At Mediconnet, we believe healthcare should be accessible, simple, and
                personalized for everyone. Our journey began with a vision to
                transform how patients connect with healthcare providers—removing
                barriers, reducing wait times, and improving overall patient
                experience.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded by a team of healthcare and technology experts, Mediconnet was
                born out of the need for a seamless platform that bridges patients
                with doctors, nurses, physiotherapists, and other health professionals
                in real time.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our platform is designed to empower patients with the tools they need
                to manage their health effectively. From booking appointments to
                accessing medical records, we strive to make healthcare more
                transparent and user-friendly.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From the very beginning, our mission has been clear: to empower
                individuals with the tools and support they need to manage their
                health easily and confidently. Whether you need to book an
                appointment, manage medical records, or get expert advice, Mediconnet
                puts you at the center of your care journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-center leading-relaxed">
              To become the leading digital healthcare network that revolutionizes patient care by providing accessible, efficient, and compassionate health services — anytime, anywhere.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-500">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            </div>
            <ul className="text-gray-700 space-y-3">
              <li className="flex text-gray-700 items-start">
                <span className="text-green-500 mission mr-2">•</span>
                Connect patients with trusted healthcare providers effortlessly
              </li>
              <li className="flex text-gray-700 items-start">
                <span className="text-green-500 mission mr-2">•</span>
                Simplify appointment booking, medical record management, and communication
              </li>
              <li className="flex text-gray-700 items-start">
                <span className="text-green-500  mr-2">•</span>
                Support informed and proactive health decisions with easy access to services
              </li>
              <li className="flex text-gray-700 items-start">
                <span className="text-green-500 mr-2">•</span>
                Enhance healthcare outcomes through technology-driven solutions
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Mediconnet */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose <span className="text-blue-600">Mediconnet?</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Comprehensive Care */}
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Comprehensive Care</h4>
              <p className="text-gray-600 text-sm">
                Access a wide range of healthcare professionals under one platform
              </p>
            </div>

            {/* User-Friendly */}
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">User-Friendly</h4>
              <p className="text-gray-600 text-sm">
                Intuitive interface designed for all ages and tech skill levels
              </p>
            </div>

            {/* Secure & Confidential */}
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Secure & Confidential</h4>
              <p className="text-gray-600 text-sm">
                Your data privacy is our top priority
              </p>
            </div>

            {/* Reliable & Trusted */}
            <div className="text-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Reliable & Trusted</h4>
              <p className="text-gray-600 text-sm">
                Verified healthcare providers committed to quality care
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg text-white p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Us on This Journey</h3>
          <p className="text-xl mb-6 opacity-90">
            At Mediconnet, we are dedicated to building a healthier community through innovation and empathy. 
            We invite you to be part of this transformation — your health, our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/positions" className="inline-block">
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
            </NavLink>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-black-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bootstrap-style utilities mixed with Tailwind */}
      <style jsx>{`
        .prose {
          max-width: none;
        }
        .container {
          max-width: 1200px;
        }
        @media (min-width: 768px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;