import React from "react";
import { blog } from "../../assets/data/dummydata";
import "./card.css";
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineTags } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Card() {


  return (
    <>
      <section className="card-section">
        <div className="cards grid3">
          {blog.map((item) => (
            <div className="card" key={item.id} data-aos="fade-down">
              <div className="image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="content">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.category}</a>
                </div>
                <Link to={`/detalies/${item.id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" />{" "}
                  <label htmlFor="">{item.date}</label>
                  <AiOutlineComment className="icon" />{" "}
                  <label htmlFor="">27</label>
                  <AiOutlineShareAlt className="icon" />{" "}
                  <label htmlFor="">Share</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Card;
