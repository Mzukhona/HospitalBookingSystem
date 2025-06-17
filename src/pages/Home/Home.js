import "./Home.css";
import React, { useState, useEffect } from "react";
import heroImage from "../../assets/images/mcsa-doctor-hero-header.png";
import image from "../../assets/images/2025_Interim-Results-Banner-1440.jpg";
import image2 from "../../assets/images/HH-Home-Slider.png";
import image3 from "../../assets/images/img_section01_04.jpg";
import emergency from "../../assets/affiliate/Medical-Innovations-teaser.png";
import hospital from "../../assets/affiliate/MHR-teaser.png";
import clinic from "../../assets/affiliate/ER24-teaser.png";
import affiliate from "../../assets/affiliate/Intercare-teaser.png";
import displayImg from "../../assets/affiliate/photo-1517120026326-d87759a7b63b.jpg";
import displayImg2 from "../../assets/affiliate/premium_photo-1682130157004-057c137d96d5.jpg";
import displayImg3 from "../../assets/affiliate/premium_photo-1682130277144-423d6b582e56.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  const images = [heroImage, image, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, images.length]);
  return (
    <div className="home-container">
      <div className=" relative h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }  z-0`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "100% 90%",
              backgroundPosition: "top",
            }}
          />
        ))}
        <div className="absolute inset-0 content " />
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              Welcome to Mediconnet
            </h1>
            <div className="mt-4 text-lg md:text-2xl text-center">
              <p>
                Your trusted partner in healthcare, connecting patients with
                professionals for a healthier tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="features" className=" text-center transition-all duration-1000">
        <div className="p-4 text-center">
          <div className="row justify-content-center gap-4">
            {/* Patient Admission Card */}
            <div
              className="card shadow"
              style={{
                width: "18rem",
                backgroundColor: "#f0f8ff",
                borderRadius: "12px",
                border: "2px solid #4a90e2",
              }}
            >
              <div className="card-body">
                <div className="col-lg-12 d-flex flex-column align-items-center">
                  <svg
                    aria-label="Placeholder"
                    className="spacingLeft bd-placeholder-img rounded-circle mb-3"
                    height="140"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="140"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#4a90e2"></rect>
                  </svg>
                  <h2
                    className="fw-bold spacingLeft"
                    style={{ color: "#2c5aa0" }}
                  >
                    Patient Admission
                  </h2>
                  <p className="text-center" style={{ color: "#5a6c7d" }}>
                    Process of admitting patients to the hospital for treatment,
                    including registration, assessment, and room.
                  </p>
                  <NavLink
                    className="spacingLeft text-decoration-none"
                    style={{ color: "#4a90e2", fontWeight: "600" }}
                    to="#"
                  >
                    Read more »
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Center of Excellence Card */}
            <div
              className="card shadow"
              style={{
                width: "18rem",
                backgroundColor: "#fff8e1",
                borderRadius: "12px",
                border: "2px solid #ff9800",
              }}
            >
              <div className="card-body">
                <div className="col-lg-12 d-flex flex-column align-items-center">
                  <svg
                    aria-label="Placeholder"
                    className="spacingLeft bd-placeholder-img rounded-circle mb-3"
                    height="140"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="140"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ff9800"></rect>
                  </svg>
                  <h2
                    className="fw-bold spacingLeft"
                    style={{ color: "#e65100" }}
                  >
                    Center of Excellence
                  </h2>
                  <p className="text-center" style={{ color: "#6d4c41" }}>
                    A specialized center that provides advanced medical care and
                    treatment in specific areas like cancer, cardiology, or
                    neurology.
                  </p>
                  <NavLink
                    className="spacingLeft text-decoration-none"
                    style={{ color: "#ff9800", fontWeight: "600" }}
                    to="#"
                  >
                    Read more »
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Our Hospitals and Clinics Card */}
            <div
              className="card shadow"
              style={{
                width: "18rem",
                backgroundColor: "#f1f8e9",
                borderRadius: "12px",
                border: "2px solid #4caf50",
              }}
            >
              <div className="card-body">
                <div className="col-lg-12 d-flex flex-column align-items-center">
                  <svg
                    aria-label="Placeholder"
                    className="spacingLeft bd-placeholder-img rounded-circle mb-3"
                    height="140"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="140"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#4caf50"></rect>
                  </svg>
                  <h2
                    className="fw-bold spacingLeft"
                    style={{ color: "#2e7d32" }}
                  >
                    Our Hospitals & Clinics
                  </h2>
                  <p className="text-center" style={{ color: "#558b2f" }}>
                    Find a list of our hospitals and clinics, including their
                    locations, services, and contact info.
                  </p>
                  <NavLink
                    className="spacingLeft text-decoration-none"
                    style={{ color: "#4caf50", fontWeight: "600" }}
                    to="#"
                  >
                    Find nearby healthcare center »
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 card-grouping">
            <h1 className="m-3 our"> Our Affiliates</h1>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <NavLink
                  to="https://www.intercare.co.za/"
                  target="blank"
                  className="card-link"
                >
                  <img
                    src={affiliate}
                    alt="Card image cap"
                    className="card-img-top"
                  />
                </NavLink>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <NavLink
                  to="https://www.er24.co.za/en/corporate/home.html"
                  target="blank"
                  className="card-link"
                >
                  <img
                    src={clinic}
                    alt="Card image cap"
                    className="card-img-top"
                  />
                </NavLink>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <NavLink
                  to="https://www.mhr.co.za/en/corporate/home.html"
                  target="blank"
                  className="card-link"
                >
                  <img
                    src={hospital}
                    alt="Card image cap"
                    className="card-img-top"
                  />
                </NavLink>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <NavLink
                  to="https://www.medicalinnovations.co.za/en/home.html"
                  target="blank"
                  className="card-link"
                >
                  <img
                    src={emergency}
                    alt="Card image cap"
                    className="card-img-top"
                  />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-5">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src={displayImg}
                    className="d-block slideShowImage"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>
                      Our pediatric care team is dedicated to providing
                      compassionate and specialized care for children of all
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src={displayImg2}
                    className="d-block slideShowImage"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>
                      Admission to our hospital is a seamless process, ensuring
                      that patients receive the care they need without
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={displayImg3}
                    className="d-block slideShowImage"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>
                      dedication to excellence in healthcare, our team of
                      professionals is committed to providing the highest
                      quality
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container-fluid text-center mt-5 p-5">
            <h2 className="mb-4">Join Us in Our Mission</h2>
            <p className="mb-4">
              At Mediconnet, we are dedicated to improving healthcare access and
              quality for all. Join us in our mission to create a healthier
              future.
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
