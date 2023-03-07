import React from "react";
import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  //state snpshot and state updating function
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountStr = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmountStr;

    console.log(amountInputRef.current);

    if (
      enteredAmountStr.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    // call a function expect to get on props to MealItem Component
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantity"
        inputProps={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          //   max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>please entered a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
