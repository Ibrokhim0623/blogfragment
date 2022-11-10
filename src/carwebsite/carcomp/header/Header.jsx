import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../../assets/data/dummydata";
import "./header.css";
import User from "./User";
import { FaBars } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { useState } from "react";

function Header() {

  const [menu, setMenu] = useState(false);
  const close = () => {
    setMenu(false)
  }

  return (
    <>
      <section className="header dflex">
        <div className="header-logo">
          <Link to='/'><h2>Car<span>s</span></h2></Link>
        </div>
        <div className={menu ? 'header-list left0' : 'header-list'}>
          <ul className="flexCenter">
            {
                nav.map((item) => (
                    <li onClick={close} key={item.id}><Link to={item.url}>{item.text}</Link></li>
                ))
            }
          </ul>
          <MdClose className="close" onClick={close}></MdClose>
        </div>
        <div className="menu" onClick={() => setMenu(!menu)}>
          <FaBars></FaBars>
        </div>
        <div className="header-account" onClick={close}>
            <User />
        </div>
      </section>
    </>
  );
}

export default Header;
