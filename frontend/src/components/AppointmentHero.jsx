import React from "react";

const AppointmentHero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          At Code Health Medical Center, we believe that your health is our top priority. Booking an appointment with us is the first step towards a healthier, happier you. Our dedicated team of healthcare professionals is ready to provide you with personalized care tailored to your specific needs.
          <p>
          To book an appointment, simply choose a convenient date and time, and our friendly staff will handle the rest. Whether you need a routine check-up, specialized treatment, or expert advice, we are here to assist you every step of the way.
          </p>
          <p>
          Experience the ease and comfort of our state-of-the-art facility, where your well-being is our mission. Schedule your appointment today and take the first step towards optimal health and wellness.
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

export default AppointmentHero;
