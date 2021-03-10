/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function MenuItems({ menuItem }) {
  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-date">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.icon1}></a>
                  <a href={item.icon2}></a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Placeholder paragraph</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
