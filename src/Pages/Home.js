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
          Hello, I'm
          <span> Francisco.</span>
        </h1>
        <p className="h-sub-text">Welcome to my portfolio!</p>
        <div className="icons">
          <Link className="icon-holder">
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/Psychooo1994"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} className="icon fb" />
            </a>
          </Link>
          <Link className="icon-holder">
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/the_mr.psycho"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon ig" />
            </a>
          </Link>
          <Link className="icon-holder">
            <a
              rel="noopener noreferrer"
              href="https://github.com/francisco-carreiro"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="icon gh" />
            </a>
          </Link>
          <Link className="icon-holder">
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/francisco-carreiro/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon in" />
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
