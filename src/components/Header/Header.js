import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MainImage from "./MainImage";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>YummyTreat</h1>
        <HeaderCartButton onClickHeaderCartBtn={props.onShowCartFromHeader} />
      </header>
      <MainImage />
    </Fragment>
  );
};

export default Header;
