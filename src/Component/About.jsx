import React from "react";
import web from "../image/tel.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        visit="/contact"
        btname="Contact Now"
        imgsrc={web}
      />
    </>
  );
};

export default About;
