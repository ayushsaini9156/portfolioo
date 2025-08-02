import React, { useState } from "react";
import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    window.open(
      "https://drive.google.com/file/d/1AsPrDe9Kub_La4LLx4CNd-AWskALe2L7/view?usp=drive_link"
    );
  };

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Ayush Saini</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Computer Science Student</div>
              <div className="i-title-item">Problem Solver</div>
              <div className="i-title-item">Full Stack Developer</div>
            </div>
          </div>
          <p className="i-desc">
            Hi, I'm Ayush Saini, currently in my final year studying Computer
            Science Engineering at ABES Engineering College, Ghaziabad. I love
            working with new technologies and solving problems. My goal is to
            contribute meaningfully to new projects and learn as much as I can.
          </p>
          <button
            className={`i-resume-button ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
          >
            View Resume
          </button>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
