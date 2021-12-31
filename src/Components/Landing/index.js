import React, { useEffect } from "react";
import AOS from "aos";
//styles
import "aos/dist/aos.css";
import "./style.css";

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="background" id="enter">
      <div className="header center">
        <h1
          className="landingHeader land"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Hi there,
        </h1>
        <h2
          className="landingText landt"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="600"
        >
          I 'm
        </h2>
        <h3
          className="landingTitle red-text"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          Daniel Molina - Power
        </h3>
      </div>
      <span
        className="landingScroll white-text center"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="1000"
      >
        Scroll down <br />
        <i className="large material-icons" id="carrot">
          expand_more
        </i>
      </span>
    </div>
  );
};

export default Landing;