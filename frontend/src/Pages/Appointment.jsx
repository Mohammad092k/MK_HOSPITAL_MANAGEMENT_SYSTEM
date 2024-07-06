import React from "react";
import AppointmentHero from "../components/AppointmentHero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <AppointmentHero
        title={"Schedule Your Appointment | Code Health Medical Center"}
        imageUrl={"/appointmentTeam.png"}
      />

      <AppointmentForm/>
    </>
  );
};

export default Appointment;
