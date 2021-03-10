/* eslint-disable no-undef */
import React from "react";
import Categories from "../Components/Categories";
import Title from "../Components/Title";
import MenuItems from "../Components/MenuItems";
import portfolios from "../Components/allportfolios";
import { useState } from "react";

function Projects() {
  const [categories, setCategories] = useState(null);
  const [menuItems, setMenuItems] = useState(portfolios);

  return (
    <div className="ProjectsPage">
      <div className="title">
        <Title title={"Portfolio"} span={"Portfolio"} />
      </div>
      <div className="portfolios-data">
        <Categories />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default Projects;
