import React from "react";

function HobbiesSection({ image, title, text }) {
  return (
    <div className="HobbiesSection">
      <div className="hobbies">
        <div className="hobbies-content">
          <img src={image} alt="" className="h-image"/>
          <h5 className="h-title">{title}</h5>
          <p className="h-text">{text} </p>
        </div>
      </div>
    </div>
  );
}

export default HobbiesSection;
