import React from "react";
import Biography from "../components/Biography";
import AboutHero from "../components/AboutHero";
const AboutUs = () => {
  return (
    <>
      <AboutHero
        title={" Welcome to Code Health Medical Center | Learn More About Us "}
        imageUrl={"/about12.png"}
      />
      <Biography imageUrl={"/about11.png"} />
    </>
  );
};

export default AboutUs;
