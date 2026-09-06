import React from "react";
import "./Navbar.css";
// images
import logoIcon from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import uploadIcon from "../assets/upload.png";
import notificationIcon from "../assets/notification.png";
import moreIcon from "../assets/more.png";
import profileIcon from "../assets/user_profile.jpg";
const Navbar = () => {
  return (
    <nav className="navbar flex-div">
      <div className="left-navbar flex-div">
        <img src={logoIcon} alt="logo" />
      </div>
      <div className="middle-navbar flex-div">
        <input type="text" placeholder="search" />
        <img src={searchIcon} alt="search" />
      </div>
      <div className="right-navbar flex-div">
        <img src={uploadIcon} alt="upload" />
        <img src={notificationIcon} alt="notification" />
        <img src={moreIcon} alt="more" />
        <img src={profileIcon} className="profile" alt="profile" />
      </div>
    </nav>
  );
};

export default Navbar;
