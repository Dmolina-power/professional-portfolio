import React, { useEffect, useRef } from "react";
//styles
import "./style.css";

const Navbar = () => {
  const ref = useRef();

  useEffect(() => {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].intersectionRatio === 0)
          document.querySelectorAll(".navbar").classList.add(".navbar-sticky");
        else if (entries[0].intersectionRatio === 1)
          document
            .querySelectorAll(".navbar")
            .classList.remove(".navbar-sticky");
      },
      { threshold: [0, 1] }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div className="navbar">
      <nav>
        <div className="nav-wrapper black">
          <ul className="right">
            <li>
            <a href="/"><i className="material-icons">home</i></a>
            </li>
            <li>
              <a href="#portfolio" className="breadcrumb">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="breadcrumb">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;