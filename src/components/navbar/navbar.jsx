import React from "react";
import { BsSearch, BsFillBellFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
import "./navbar.scss";

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navBar">
        <div className="container">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            ></img>
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular </span>
            <span>My List</span>
          </div>
          <div className="right">
            <div className="search">
              <BsSearch />
              <input type="text" placeholder="Search" />
            </div>
            <span>KID</span>
            <span className="icon">
              <BsFillBellFill />
            </span>

            <img
              src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="profile">
              <MdArrowDropDown className="icon" />
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
