import React from "react";
import Title from "../Components/Title";
import ImageSection from "./ImageSection";

function About() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
    </div>
  );
}

export default About;
