import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bg-light  cls-contact">
      <div className="container-fluid text-white text-center py-5">
        <h3 className="header-contact">Contact Offices</h3>
        <p>We are here to assist you with any inquiries or concerns.</p>
        <div className="container mt-5">
          <h2 className="mb-4">Contact Details</h2>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Office Number</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Emergency Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>011 123 4567</td>
                <td>info@example.com</td>
                <td>071 234 5678</td>
                <td>0800 911 911</td>
              </tr>
              <tr>
                <td>021 456 7890</td>
                <td>support@example.com</td>
                <td>072 345 6789</td>
                <td>0800 112 112</td>
              </tr>
              <tr>
                <td>031 987 6543</td>
                <td>admin@example.com</td>
                <td>073 456 7890</td>
                <td>0800 101 202</td>
              </tr>
              <tr>
                <td>041 321 9876</td>
                <td>contact@example.com</td>
                <td>074 567 8901</td>
                <td>0800 303 404</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" text-center  py-5">
        <h1 className="header-contact">locations</h1>
        <p>Find us at our various locations</p>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Location 1</h3>
              <p>123 Main St, City, Country</p>
              <div className="map-container mt-2">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.419415684681!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1616161616161"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="map-overlay">
                  <p>Click on the map to view in Google Maps</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h3>Location 2</h3>
              <p>456 Elm St, City, Country</p>
              <div className="map-container mt-2">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.419415684681!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1616161616161"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="map-overlay">
                  <p>Click on the map to view in Google Maps</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h3>Location 3</h3>
              <p>789 Oak St, City, Country</p>
              <div className="map-container mt-2">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.419415684681!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1616161616161"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="map-overlay">
                  <p>Click on the map to view in Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pb-5">
        <h2 className="header-contact">Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
