import React from "react";

const AboutHero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Our mission is to deliver top-quality healthcare with a patient-centric approach. We strive to enhance the well-being of our community through innovative medical practices, continuous improvement, and a commitment to excellence.
          <p>
          We envision a world where everyone has access to the highest standard of healthcare. Our goal is to be a leading medical center recognized for our exceptional care, advanced treatments, and unwavering dedication to patient health and wellness.
          </p>
          <p>
          Our team of highly skilled and experienced healthcare professionals is at the heart of Code Health Medical Center. We are proud to have a diverse group of doctors, nurses, therapists, and support staff who are dedicated to providing the best possible care to our patients. Each member of our team brings a wealth of knowledge and expertise, ensuring that you receive the highest standard of medical care.
          </p>

          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
