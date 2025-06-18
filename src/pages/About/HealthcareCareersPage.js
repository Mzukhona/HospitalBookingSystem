import React, { useState } from 'react';
import { MapPin, Briefcase, Clock, Users, Heart, Send, User, Mail, Phone, FileText, GraduationCap } from 'lucide-react';

const HealthcareCareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    position: '',
    experience: '',
    qualifications: '',
    motivation: ''
  });

  const cities = [
    'Durban', 'Cape Town', 'Mount Frere', 'Johannesburg', 
    'Midrand', 'Gqeberha', 'Pretoria'
  ];

  const healthcareJobs = [
    {
      id: 1,
      title: 'Registered Nurse',
      location: 'Durban',
      type: 'Full-time',
      department: 'General Medicine',
      requirements: 'Nursing degree, SANC registration',
      salary: 'R25,000 - R35,000',
      description: 'Provide quality patient care in medical wards'
    },
    {
      id: 2,
      title: 'Medical Doctor',
      location: 'Cape Town',
      type: 'Full-time',
      department: 'Emergency Medicine',
      requirements: 'MBChB degree, HPCSA registration',
      salary: 'R45,000 - R65,000',
      description: 'Emergency department physician for trauma cases'
    },
    {
      id: 3,
      title: 'Physiotherapist',
      location: 'Johannesburg',
      type: 'Full-time',
      department: 'Rehabilitation',
      requirements: 'Physiotherapy degree, HPCSA registration',
      salary: 'R28,000 - R38,000',
      description: 'Provide rehabilitation services to patients'
    },
    {
      id: 4,
      title: 'Pharmacist',
      location: 'Pretoria',
      type: 'Full-time',
      department: 'Pharmacy',
      requirements: 'Pharmacy degree, SAPC registration',
      salary: 'R35,000 - R45,000',
      description: 'Hospital pharmacy medication management'
    },
    {
      id: 5,
      title: 'Clinical Psychologist',
      location: 'Gqeberha',
      type: 'Full-time',
      department: 'Mental Health',
      requirements: 'Psychology Masters, HPCSA registration',
      salary: 'R30,000 - R42,000',
      description: 'Provide mental health services to patients'
    },
    {
      id: 6,
      title: 'Radiographer',
      location: 'Midrand',
      type: 'Full-time',
      department: 'Radiology',
      requirements: 'Radiography degree, HPCSA registration',
      salary: 'R26,000 - R36,000',
      description: 'Operate imaging equipment and assist patients'
    },
    {
      id: 7,
      title: 'Community Health Worker',
      location: 'Mount Frere',
      type: 'Full-time',
      department: 'Community Health',
      requirements: 'Health promotion certificate',
      salary: 'R12,000 - R18,000',
      description: 'Provide community-based health education and support'
    },
    {
      id: 8,
      title: 'Medical Laboratory Technologist',
      location: 'Durban',
      type: 'Full-time',
      department: 'Laboratory Services',
      requirements: 'Medical Technology degree, HPCSA registration',
      salary: 'R24,000 - R32,000',
      description: 'Conduct laboratory tests and analyze samples'
    }
  ];

  const handleInputChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setApplicationData({
      ...applicationData,
      position: job.title,
      city: job.location
    });
  };

  const handleSubmit = () => {
    if (!applicationData.fullName || !applicationData.email || !applicationData.phone || 
        !applicationData.city || !applicationData.position || !applicationData.qualifications || 
        !applicationData.motivation) {
      alert('Please fill in all required fields.');
      return;
    }
    alert('Application submitted successfully! We will contact you soon.');
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      position: '',
      experience: '',
      qualifications: '',
      motivation: ''
    });
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-red-300" />
            <h1 className="text-4xl font-bold mb-2">Healthcare Careers South Africa</h1>
            <p className="text-xl opacity-90">Join our mission to provide quality healthcare services</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Job Listings */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Available Positions
              </h2>
              
              <div className="space-y-4">
                {healthcareJobs.map((job) => (
                  <div
                    key={job.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                      selectedJob?.id === job.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => handleJobSelect(job)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-gray-800">{job.title}</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium text-green-600">{job.salary}/month</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mt-2">{job.description}</p>
                    
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>Requirements:</strong> {job.requirements}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Send className="w-6 h-6 text-green-600" />
              Apply Now
            </h2>

            {selectedJob && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-800">Selected Position:</h3>
                <p className="text-blue-700">{selectedJob.title} - {selectedJob.location}</p>
              </div>
            )}

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={applicationData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Preferred City *
                  </label>
                  <select
                    name="city"
                    value={applicationData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-1" />
                  Position of Interest *
                </label>
                <select
                  name="position"
                  value={applicationData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a position</option>
                  {healthcareJobs.map((job) => (
                    <option key={job.id} value={job.title}>{job.title} - {job.location}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="w-4 h-4 inline mr-1" />
                  Qualifications & Certifications *
                </label>
                <textarea
                  name="qualifications"
                  value={applicationData.qualifications}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="List your relevant qualifications, degrees, and professional registrations..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Years of Experience
                </label>
                <select
                  name="experience"
                  value={applicationData.experience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years (Entry level)</option>
                  <option value="2-5">2-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-1" />
                  Why do you want to work in healthcare? *
                </label>
                <textarea
                  name="motivation"
                  value={applicationData.motivation}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your passion for healthcare and why you want to join our team..."
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Application
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Healthcare?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Heart className="w-8 h-8 mx-auto text-red-500" />
                <h4 className="font-semibold">Make a Difference</h4>
                <p className="text-gray-600 text-sm">Impact lives and contribute to community health</p>
              </div>
              <div className="space-y-2">
                <Users className="w-8 h-8 mx-auto text-blue-500" />
                <h4 className="font-semibold">Career Growth</h4>
                <p className="text-gray-600 text-sm">Continuous learning and professional development</p>
              </div>
              <div className="space-y-2">
                <GraduationCap className="w-8 h-8 mx-auto text-green-500" />
                <h4 className="font-semibold">Job Security</h4>
                <p className="text-gray-600 text-sm">Stable career in an essential industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareCareersPage;