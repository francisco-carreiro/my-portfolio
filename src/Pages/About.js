import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillSection from "../Components/SkillSection";
import HobbiesSection from "../Components/HobbiesSection";
import draw from "../img/draw.gif";
import music from "../img/music.gif";
import game from "../img/game.gif";

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
      <Title title={"Hobbies"} span={"Hobbies"} />
      <div className="hobbies-container">
        <HobbiesSection
          image={draw}
          title={"Draw"}
          text={
            "Since I was a kid, I really enjoyed grabbing a pencil or a pen to express my imagination into a piece of paper, nowadays its a really good way to plan what I might want to do on projects."
          }
        />
        <HobbiesSection
          image={music}
          title={"Play Guitar"}
          text={
            "When I was around 15/16 years old I got my first guitar little did I know that my guitar hero's passion was gonna become a hell of a hobby, I learned alone how to play it so it was kinda hard."
          }
        />
        <HobbiesSection
          image={game}
          title={"Play Games"}
          text={
            "It all started with the Sega Genesis and the good old Nintendo, and my joy in gaming never stopped, I really enjoy playing all kinds of video games with my friend and have loads of fun laughing a lot with them."
          }
        />
      </div>
    </div>
  );
}

export default About;
