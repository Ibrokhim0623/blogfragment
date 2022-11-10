import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { category } from "../../assets/data/dummydata";
import "./blog.css";

function Blog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  };

  return (
    <>
      <section className="blog">
        <div className="wrapper">
          <Slider {...settings}>
            {category.map((item) => (
              <div className="blogCard" key={item.id} data-aos="fade-down">
                <div className="images">
                  <img src={item.img} alt={item.category} />
                </div>
                <div className="content">
                  <h4>{item.category}</h4>
                  <p>{item.title.slice(0, 35)}...</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Blog;
