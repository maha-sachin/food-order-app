import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.inputProps.id}>{props.label}</label>
      <input ref={ref} {...props.inputProps} />
    </div>
  );
});
export default Input;
