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
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Languages</p>
            <p>Nationality</p>
            <p>Country</p>
            <p>City</p>
          </div>
          <div className="right-section">
            <p>: Francisco Machado Carreiro</p>
            <p>: 26</p>
            <p>: Portuguese, English</p>
            <p>: Portuguese</p>
            <p>: Portugal</p>
            <p>: Ponta Delgada (Azores)</p>
          </div>
        </div>
        <a
          href="https://www.dropbox.com/s/1l1q7kbew71ncks/cv_franciscoMcarreiro.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button className="btn">Download my CV</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
