import React from "react";
import mealsImage from "../../asserts/meals.jpeg";
import classes from "./MainImage.module.css";

const MainImage = () => {
  return (
    <div data-testid='main-img' className={classes["main-image"]}>
      <img src={mealsImage} alt="A Table Full Of Delicious Food!." />
    </div>
  );
};
export default MainImage;
