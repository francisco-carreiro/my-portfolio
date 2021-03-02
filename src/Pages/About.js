import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillSection from "../Components/SkillSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

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
      <Title title={"Services"} span={"Services"} />
      <div className="services-container">
        <ServicesSection
          image={design}
          title={"Web design"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis gravida lacus, eu facilisis libero. Cras ipsum metus, eleifend id elit a, bibendum tincidunt magna."
          }
        />
        <ServicesSection
          image={intelligence}
          title={"AI"}
          text={"i do AI for a living!"}
        />
        <ServicesSection
          image={gamedev}
          title={"Game Dev"}
          text={"i do Game Dev for a living!"}
        />
      </div>
    </div>
  );
}

export default About;
