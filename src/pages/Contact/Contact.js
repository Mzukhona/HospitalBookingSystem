import { useState } from 'react';

// Business Information
const businessInfo = {
  contact: {
    email: "info@healthcarepro.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Medical Center Drive",
      city: "Health City",
      state: "HC",
      zipCode: "12345",
      fullAddress: "123 Medical Center Drive, Health City, HC 12345"
    }
  },
  
  officeHours: {
    monday: { open: "8:00 AM", close: "6:00 PM", isOpen: true },
    tuesday: { open: "8:00 AM", close: "6:00 PM", isOpen: true },
    wednesday: { open: "8:00 AM", close: "6:00 PM", isOpen: true },
    thursday: { open: "8:00 AM", close: "6:00 PM", isOpen: true },
    friday: { open: "8:00 AM", close: "5:00 PM", isOpen: true },
    saturday: { open: "9:00 AM", close: "2:00 PM", isOpen: true },
    sunday: { open: null, close: null, isOpen: false }
  },

  locations: [
    {
      id: 1,
      name: "Main Medical Center",
      address: "123 Medical Center Drive, Health City, HC 12345",
      specialties: ["General Medicine", "Emergency Care", "Surgery"]
    },
    {
      id: 2,
      name: "North Campus Clinic",
      address: "456 North Health Blvd, Health City, HC 12346",
      specialties: ["Pediatrics", "Family Medicine", "Preventive Care"]
    },
    {
      id: 3,
      name: "Wellness Center East",
      address: "789 Wellness Way, Health City, HC 12347",
      specialties: ["Physical Therapy", "Rehabilitation", "Mental Health"]
    }
  ],

  isOpenToday() {
    const today = new Date().getDay();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return this.officeHours[days[today]].isOpen;
  },

  getTodaysHours() {
    const today = new Date().getDay();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todaySchedule = this.officeHours[days[today]];
    
    if (!todaySchedule.isOpen) {
      return "Closed";
    }
    return `${todaySchedule.open} - ${todaySchedule.close}`;
  }
};

// Material Icons Component
const MaterialIcon = ({ icon, className = "", size = 24 }) => (
  <span className={`material-icons ${className}`} style={{ fontSize: size }}>
    {icon}
  </span>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);

    setFormData({ name: '', email: '', subject: '', message: '', urgency: 'normal' });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Material Icons CSS */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center">
            <MaterialIcon icon="check_circle" className="mr-2" />
            <div>
              <div className="font-semibold">Message Sent Successfully!</div>
              <div className="text-sm">Thank you for contacting HealthCare Pro. We'll respond within 24 hours.</div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10" />
          <div className="relative container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                <MaterialIcon icon="mail" size={40} className="text-blue-600" />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-blue-900 mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
                Your health is our priority. Reach out to our dedicated healthcare team for appointments, 
                inquiries, or emergency assistance. We're here to provide exceptional care when you need it most.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group hover:scale-105 transition-all duration-300 border border-blue-200 shadow-lg hover:shadow-xl bg-white rounded-lg">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <MaterialIcon icon="email" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-blue-900 text-xl font-bold mb-4">Email Us</h3>
                <p className="text-blue-700 font-medium text-lg mb-2">{businessInfo.contact.email}</p>
                <p className="text-blue-600 text-sm">We respond within 24 hours</p>
              </div>
            </div>

            <div className="group hover:scale-105 transition-all duration-300 border border-blue-200 shadow-lg hover:shadow-xl bg-white rounded-lg">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <MaterialIcon icon="phone" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-blue-900 text-xl font-bold mb-4">Call Us</h3>
                <p className="text-blue-700 font-medium text-lg mb-2">{businessInfo.contact.phone}</p>
                <p className="text-blue-600 text-sm">24/7 Emergency Line Available</p>
              </div>
            </div>

            <div className="group hover:scale-105 transition-all duration-300 border border-blue-200 shadow-lg hover:shadow-xl bg-white rounded-lg">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <MaterialIcon icon="location_on" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-blue-900 text-xl font-bold mb-4">Visit Us</h3>
                <p className="text-blue-700 font-medium mb-1">{businessInfo.contact.address.street}</p>
                <p className="text-blue-700 font-medium mb-2">{businessInfo.contact.address.city}, {businessInfo.contact.address.state} {businessInfo.contact.address.zipCode}</p>
                <p className="text-blue-600 text-sm">Main Healthcare Campus</p>
              </div>
            </div>
          </div>

          {/* Office Hours & Status */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border border-blue-200 shadow-lg bg-white rounded-lg">
              <div className="text-center p-6 border-b border-blue-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <MaterialIcon icon="schedule" size={32} className="text-blue-600" />
                </div>
                <h2 className="text-blue-900 text-2xl font-bold">Office Hours</h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-blue-100">
                      <span className="font-semibold text-blue-900">Monday - Thursday</span>
                      <span className="text-blue-700">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-blue-100">
                      <span className="font-semibold text-blue-900">Friday</span>
                      <span className="text-blue-700">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-blue-100">
                      <span className="font-semibold text-blue-900">Saturday</span>
                      <span className="text-blue-700">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-semibold text-blue-900">Sunday</span>
                      <span className="text-blue-500">Closed</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <MaterialIcon 
                        icon={businessInfo.isOpenToday() ? 'check_circle' : 'cancel'} 
                        className={businessInfo.isOpenToday() ? 'text-green-600' : 'text-red-500'} 
                        size={24} 
                      />
                      <span className="font-semibold text-blue-900 ml-3">
                        {businessInfo.isOpenToday() ? 'Open Today' : 'Closed Today'}
                      </span>
                    </div>
                    <p className="text-blue-700 mb-2">
                      <strong>Today's Hours:</strong> {businessInfo.getTodaysHours()}
                    </p>
                    <p className="text-blue-600 text-sm">
                      Emergency services available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MaterialIcon icon="business" size={32} className="text-blue-600" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-blue-900 mb-4">Our Locations</h2>
              <p className="text-xl text-blue-700 max-w-2xl mx-auto">
                Multiple convenient locations to serve you better
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessInfo.locations.map((location) => (
                <div key={location.id} className="hover:scale-105 transition-all duration-300 border border-blue-200 shadow-lg hover:shadow-xl bg-white rounded-lg">
                  <div className="p-6">
                    <h3 className="text-blue-900 text-xl font-bold mb-4">{location.name}</h3>
                    <div className="flex items-start mb-4">
                      <MaterialIcon icon="place" size={20} className="text-blue-600 mr-2 mt-1" />
                      <p className="text-blue-700">{location.address}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900 mb-2">Specialties:</p>
                      <div className="space-y-1">
                        {location.specialties.map((specialty, index) => (
                          <span key={index} className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-1">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="border border-blue-200 shadow-xl bg-white rounded-lg">
              <div className="text-center p-8 border-b border-blue-100">
                <h2 className="text-3xl font-serif text-blue-900 font-bold">Send us a Message</h2>
                <p className="text-blue-700 mt-2">We're here to help with any questions or concerns</p>
              </div>
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-blue-900 font-medium block">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 border border-blue-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-blue-900 font-medium block">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 border border-blue-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-blue-900 font-medium block">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this regarding?"
                        className="w-full px-3 py-2 border border-blue-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="urgency" className="text-blue-900 font-medium block">Priority Level</label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-blue-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900"
                      >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-blue-900 font-medium block">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please describe your inquiry or concern in detail..."
                      rows={6}
                      className="w-full px-3 py-2 border border-blue-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900"
                    />
                  </div>
                  
                  <div className="text-center">
                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="px-12 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50 flex items-center justify-center mx-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <MaterialIcon icon="send" className="mr-2" size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;