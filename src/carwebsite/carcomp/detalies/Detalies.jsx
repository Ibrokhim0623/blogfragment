import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/dummydata";
import "./detalies.css";

function Detalies() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
  }, []);
  return (
    <>
      {blogs ? (
        <div className="simplePost">
          <div className="left">
            <img src={blogs.img} alt="Image" />
            <h4>{blogs.title}</h4>
            <p>{blogs.desc}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Detalies;
