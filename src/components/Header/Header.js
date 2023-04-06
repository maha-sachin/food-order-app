import React, { Fragment } from "react";

import mealsImage from "../../asserts/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>YummyTreat</h1>

        <HeaderCartButton onClickHeaderCartBtn={props.onShowCartFromHeader} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Table Full Of Delicious Food!." />
      </div>
    </Fragment>
  );
};

export default Header;
