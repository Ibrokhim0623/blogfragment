import React from "react";
import "./pages.css";
import services1 from "../assets/cars/2.jpg";
import services2 from "../assets/cars/3.jpg";
import services3 from "../assets/cars/1.jpg";
import caricon1 from "../assets/cars/caricon1.svg";
import caricon2 from "../assets/cars/caricon2.svg";
import caricon3 from "../assets/cars/caricon3.svg";

function Pages() {
  return (
    <>
      <section className="services">
        <div className="car">
          <div className="carImg">
            <div className="opacitycar">+</div>
            <img className="servImg" src={services1} alt="services1" />
          </div>
          <div className="forPosition">
            <div className="forIcon">
              <img src={caricon1} alt="caricon1" />
            </div>
          </div>
          <div className="content">
            <h3>Auto Detaling</h3>
            <p>
              There are not many of passages of lorem ipsum avail isn alteration
              donationa in form.
            </p>
          </div>
          <button><span>Read More</span></button>
        </div>
        <div className="car">
          <div className="carImg">
            <div className="opacitycar">+</div>
            <img className="servImg" src={services2} alt="services1" />
          </div>
          <div className="forPosition">
            <div className="forIcon">
              <img src={caricon2} alt="caricon1" />
            </div>
          </div>
          <div className="content">
            <h3>Auto Services</h3>
            <p>
              There are not many of passages of lorem ipsum avail isn alteration
              donationa in form.
            </p>
          </div>
          <button><span>Read More</span></button>
        </div>
        <div className="car">
          <div className="carImg">
            <div className="opacitycar">+</div>
            <img className="servImg" src={services3} alt="services1" />
          </div>
          <div className="forPosition">
            <div className="forIcon">
              <img src={caricon3} alt="caricon1" />
            </div>
          </div>
          <div className="content">
            <h3>Auto Wash</h3>
            <p>
              There are not many of passages of lorem ipsum avail isn alteration
              donationa in form.
            </p>
          </div>
          <button><span>Read More</span></button>
        </div>
      </section>
    </>
  );
}

export default Pages;
