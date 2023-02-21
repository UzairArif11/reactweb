import React from "react";
import web from "../image/pic1.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        visit="/service"
        btname="Get Started"
        imgsrc={web}
      />
    </>
  );
};

export default Home;
