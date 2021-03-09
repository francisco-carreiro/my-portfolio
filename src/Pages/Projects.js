/* eslint-disable no-undef */
import React from "react";
import Categories from "../Components/categories";
import Title from "../Components/Title";
import MenuItems from "../Components/MenuItems";
import portfolios from "../Components/allportfolios";
import { useState } from "react";

function Projects() {
  const [categories, setCategories] = useState(null);
  const [menu, setMenuItems] = useState(portfolios);

  return (
    <div className="ProjectsPage">
      <div className="title">
        <Title title={"Portfolio"} span={"Portfolio"} />
      </div>
      <div className="portfolios">
        <Categories />
        <MenuItems menuItem={menuItem} />
      </div>
    </div>
  );
}

export default Projects;
