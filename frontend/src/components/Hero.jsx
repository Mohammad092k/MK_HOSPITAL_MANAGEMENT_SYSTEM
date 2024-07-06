import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to Code Health Medical Center, where exceptional healthcare meets compassionate service. Our advanced facility is dedicated to providing a full range of medical services, tailored to meet your individual needs. Our team of highly skilled professionals is committed to offering personalized care, ensuring your journey towards health and wellness is smooth and supportive. At Code Health, your well-being is our top priority, and we are here to provide the outstanding care you deserve at every step.
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

export default Hero;
