import React from "react";
import "./pages.css";
import contact from "../assets/cars/contact.jpg";

function Contact() {
  return (
    <>
      <section className="contact">
        <img src={contact} alt="contact img" />
        <div className="contactSide">
          <div className="left-side">
            <h3>Get In touch</h3>
            <p>
              Have an inquiry or some feedbak for us? Fill out the form below to
              contact our team.
            </p>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <label>How can we help?</label>
              <textarea required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="right-side">
            <iframe
              className="gmap_iframe"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Navoi, vasxod&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
