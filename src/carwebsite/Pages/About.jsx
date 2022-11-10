import React from "react";
import "./pages.css";
import man1 from "../assets/cars/man1.jpg";
import man2 from "../assets/cars/man2.jpg";
import man3 from "../assets/cars/man3.jpg";

function About() {
  return (
    <>
      <section className="about">
        <div className="about-left">
          <h1>Powerful Logistics Service</h1>
          <p>
            Quisque sagittis purus sit amet volutpat consequat mauris nunc. Nunc
            aliquet bibendum enim facilisis gravida. Gravida neque convallis a
            cras semper. Lobortis elementum nibh tellus molestie nunc non
            blandit massa.
          </p>
          <button>Read More</button>
        </div>
        <div className="about-right">
          <div className="first-side">
            <div className="man1">
              <div className="opacity">Read More</div>
              <img src={man1} alt="man1" />
            </div>
            <div className="man2" data-aos="fade-up">
              <div className="opacity">Read More</div>
              <img src={man2} alt="man2" />
            </div>
          </div>
          <div className="second-side">
            <div className="man3">
              <div className="opacity">Read More</div>
              <img src={man3} alt="man3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
