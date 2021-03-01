import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillSection from "../Components/SkillSection";

function About() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillContainer">
        <SkillSection skill={"Javascript"} progress={"65%"} width={"65%"} />
        <SkillSection skill={"HTML"} progress={"70%"} width={"70%"} />
        <SkillSection skill={"CSS"} progress={"70%"} width={"70%"} />
        <SkillSection skill={"Java"} progress={"75%"} width={"75%"} />
        <SkillSection skill={"Python"} progress={"25%"} width={"25%"} />
      </div>
    </div>
  );
}

export default About;
