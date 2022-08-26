import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const handleClickGh = () => {
    window.open("https://github.com/francisco-carreiro");
  };

  const handleClickLi = () => {
    window.open("https://www.linkedin.com/in/francisco-carreiro/");
  };

  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hello, I 'm <span> Francisco. </span>{" "}
        </h1>{" "}
        <p className="h-sub-text"> Welcome to my portfolio! </p>{" "}
        <div className="icons">
          <Link className="icon-holder">
            <a
              onClick={handleClickGh}
              href="https://github.com/francisco-carreiro"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faGithub} className="icon gh" />
            </a>{" "}
          </Link>{" "}
          <Link className="icon-holder">
            <a
              onClick={handleClickLi}
              href="https://www.linkedin.com/in/francisco-carreiro/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon in" />
            </a>{" "}
          </Link>{" "}
        </div>{" "}
      </header>{" "}
    </div>
  );
}

export default Home;
