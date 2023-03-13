import React, { useState } from "react";
import useInput from "../hooks/use-input";
import classes from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  //   const [enteredName, setEnteredName] = useState("");
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredPostalCode, setEnteredPostalCode] = useState("");

  //   const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredStreetIsTouched, setEnteredStreetIsTouched] = useState(false);
  const [enteredCityIsTouched, setEnteredCityIsTouched] = useState(false);
  const [enteredPostalCodeIsTouched, setEnteredPostalCodeIsTouched] = useState(
    false
  );

  //   const enteredNameIsValid = enteredName.trim() !== "";
  //   const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredStreetIsValid = enteredStreet.trim() !== "";
  const streetInputIsInValid = !enteredStreetIsValid && enteredStreetIsTouched;

  const enteredCityIsValid = enteredCity.trim() !== "";
  const cityInputIsInValid = !enteredCityIsValid && enteredCityIsTouched;

  const enteredPostalCodeIsValid = enteredPostalCode.trim().length === 5;
  const postalCodeInputIsInValid =
    !enteredPostalCodeIsValid && enteredPostalCodeIsTouched;

  //   const inputNameHandler = (event) => {
  //     setEnteredName(event.target.value);
  //     setEnteredNameIsTouched(true);
  //   };
  const inputStreetHandler = (event) => {
    setEnteredStreet(event.target.value);
    setEnteredStreetIsTouched(true);
  };
  const inputCityHandler = (event) => {
    setEnteredCity(event.target.value);
    setEnteredCityIsTouched(true);
  };
  const inputPostalCodeHandler = (event) => {
    setEnteredPostalCode(event.target.value);
    setEnteredPostalCodeIsTouched(true);
    //console.log("inputPostalCodeHandler");
  };

  const inputBlurHandler = (event) => {
    switch (event.target.id) {
      //   case "name":
      //     setEnteredNameIsTouched(true);
      //     break;
      case "street":
        setEnteredStreetIsTouched(true);
        break;
      case "city":
        setEnteredCityIsTouched(true);
        break;
      case "postalcode":
        setEnteredPostalCodeIsTouched(true);
        break;

      default:
        break;
    }

    console.info("blur", event.target.id);
  };

  const formSubmittionHandler = (event) => {
    event.preventDefault();
    // setEnteredNameIsTouched(true);
    // setEnteredCityIsTouched(true);
    // setEnteredPostalCodeIsTouched(true);
    // setEnteredStreetIsTouched(true);

    //enteredName is empty is not run
    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    // if (!enteredNameIsValid ) {
    //   return;
    // }
    console.log("submitted..");
    console.log(enteredName, enteredCity, enteredStreet, enteredPostalCode);

    //submit the cart data
    props.onConfirmOrder({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });

    // setEnteredName("");
    // setEnteredNameIsTouched(false);
    resetNameInput();

    setEnteredStreet("");
    setEnteredStreetIsTouched(false);
    setEnteredCity("");
    setEnteredCityIsTouched(false);
    setEnteredPostalCode("");
    setEnteredPostalCodeIsTouched(false);
  };

  const nameControlledClasses = `${classes.control}
   ${nameInputHasError ? classes.invalid : ""}`;

  const streetControlledClasses = `${classes.control}
    ${streetInputIsInValid ? classes.invalid : ""}`;

  const cityControlledClasses = `${classes.control}
    ${cityInputIsInValid ? classes.invalid : ""}`;

  const postalCodeControlledClasses = `${classes.control}
    ${postalCodeInputIsInValid ? classes.invalid : ""}`;

  return (
    <form onSubmit={formSubmittionHandler}>
      <div className={nameControlledClasses}>
        <label htmlFor="name">Your Name : </label>
        <input
          type="text"
          id="name"
          //   onChange={inputNameHandler}
          onChange={nameChangedHandler}
          //onBlur={inputBlurHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        ></input>
        {nameInputHasError && (
          <p className="error-text">Name must not be empty,Enter Valid Name</p>
        )}
      </div>
      <div className={streetControlledClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={inputStreetHandler}
          onBlur={inputBlurHandler}
          value={enteredStreet}
        ></input>
        {streetInputIsInValid && enteredStreetIsTouched && (
          <p className="error-text">Enter Valid Street Name</p>
        )}
      </div>
      <div className={cityControlledClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={inputCityHandler}
          onBlur={inputBlurHandler}
          value={enteredCity}
        ></input>
        {cityInputIsInValid && enteredCityIsTouched && (
          <p>Enter your City Name</p>
        )}
      </div>
      <div className={postalCodeControlledClasses}>
        <label htmlFor="postalcode">Postal Code</label>
        <input
          type="number"
          id="postalcode"
          onChange={inputPostalCodeHandler}
          onBlur={inputBlurHandler}
          value={enteredPostalCode}
        ></input>
        {postalCodeInputIsInValid && enteredPostalCodeIsTouched && (
          <p>Enter Valid Postal Code (no long Five) </p>
        )}
      </div>

      <div className={classes.actions}>
        <button
          type="button"
          onClick={props.onCancel}
          className={classes["button--alt"]}
        >
          Cancel
        </button>
        <button className={classes.button}> Confirm </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
