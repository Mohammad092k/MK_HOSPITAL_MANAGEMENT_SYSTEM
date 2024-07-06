import React from "react";
<link rel="stylesheet" href="App.css"></link>
const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>Code Health Medical Center: Excellence in Healthcare</p>
          <p>
          Code Health Medical Center stands as a beacon of excellence in the healthcare industry, dedicated to providing comprehensive and compassionate medical services. Nestled in the heart of our community, our state-of-the-art facility combines modern medical advancements with a heartfelt commitment to patient care.
          </p>
          <p>
          At Code Health, we prioritize your well-being above all else. Our patient-centric philosophy is reflected in every aspect of our service, ensuring that your journey towards optimal health is smooth, supportive, and successful. We believe in building lasting relationships with our patients, fostering a nurturing environment where trust and communication thrive.
          </p>
          <p>Discover the difference at Code Health Medical Center, where your health is our mission and your well-being is our promise.</p>
          <div className="madeby">
          ~Made by <span className="symbol">ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ </span><a className="gitname" href="https://github.com/Mohammad092k">Mohammad Kaif </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Biography;
