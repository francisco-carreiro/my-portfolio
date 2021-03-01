import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Francisco.</span>
        </h1>
        <p className="h-sub-text">Info about myself.............</p>
        <div className="icons">
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon in" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
