import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
const Sidebar = ({ Sidebar }) => {
  return (
    <div className={`sidebar ${Sidebar ? "" : "small"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home} alt="home" />
          <p>home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="game" />
          <p>gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="automobiles" />
          <p>automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="sports" />
          <p>sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="entertainment" />
          <p>emtertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="tech" />
          <p>technology</p>
        </div>
        <div className="side-link">
          <img src={music} alt="music" />
          <p>music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="blogs" />
          <p>blogs</p>
        </div>
        <div className="side-link">
          <img src={news} alt="news" />
          <p>news</p>
        </div>
      </div>
      <hr />
      <h3>subscribed</h3>
      <div className="subscribed-list">
        <div className="side-link">
          <img src={tom} alt="" />
          <p>tom</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>megan</p>
        </div>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>jack</p>
        </div>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>beast</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
