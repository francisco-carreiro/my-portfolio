import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Francisco</span>
        </h4>
        <p className="about-text">
          Coding my way from graphic designer to programmer. I'm passionately
          looking for new ways of mixing design with code to help design a whole
          new world full of joy for everyone. I never lose my motivation to
          learn more && more, until my brain is overflowing with information,
          breaking any and all barriers that may appear on this journey. Because
          everything that's worthwhile in this life takes effort!
        </p>
        <div className="about-details">
          <div className="name-details">
            <p>Full name</p>
            <p className="p-margin-left">: Francisco Machado Carreiro</p>
          </div>
          <div className="name-details">
            <p>Age</p>
            <p className="p-margin-left">: 26</p>
          </div>
          <div className="name-details">
            <p>Languages</p>
            <p className="p-margin-left">: Portuguese, English</p>
          </div>
          <div className="name-details">
            <p>Nationality</p>
            <p className="p-margin-left">: Portuguese</p>
          </div>
          <div className="name-details">
            <p>Country</p>
            <p className="p-margin-left">: Portugal</p>
          </div>
          <div className="name-details">
            <p>City</p>
            <p className="p-margin-left">: Ponta Delgada (Azores)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
