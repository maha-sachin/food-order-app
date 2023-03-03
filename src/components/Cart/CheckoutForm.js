import React, { useRef, useState } from "react";
import classes from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredPostalCode, setEnteredPostalCode] = useState("");

  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredStreetIsTouched, setEnteredStreetIsTouched] = useState(false);
  const [enteredCityIsTouched, setEnteredCityIsTouched] = useState(false);
  const [enteredPostalCodeIsTouched, setEnteredPostalCodeIsTouched] = useState(
    false
  );

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredStreetIsValid = enteredStreet.trim() !== "";
  const streetInputIsInValid = !enteredStreetIsValid && enteredStreetIsTouched;

  const enteredCityIsValid = enteredCity.trim() !== "";
  const cityInputIsInValid = !enteredCityIsValid && enteredCityIsTouched;

  const enteredPostalCodeIsValid = enteredPostalCode.trim().length === 5;
  const postalCodeInputIsInValid =
    !enteredPostalCodeIsValid && enteredPostalCodeIsTouched;

  const inputNameHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameIsTouched(true);
  };
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
    console.log("inputPostalCodeHandler");
  };

  const inputBlurHandler = (event) => {
    switch (event.target.id) {
      case "name":
        setEnteredNameIsTouched(true);
        break;
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
    setEnteredNameIsTouched(true);
    setEnteredCityIsTouched(true);
    setEnteredPostalCodeIsTouched(true);
    setEnteredStreetIsTouched(true);

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
    console.log(enteredName);

    //submit the cart data
    props.onConfirmOrder({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });

    setEnteredName("");
    setEnteredNameIsTouched(false);
    setEnteredStreet("");
    setEnteredStreetIsTouched(false);
    setEnteredCity("");
    setEnteredCityIsTouched(false);
    setEnteredPostalCode("");
    setEnteredPostalCodeIsTouched(false);
  };

  const nameControlledClasses = `${classes.control}
   ${nameInputIsInValid ? classes.invalid : ""}`;

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
          onChange={inputNameHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
        ></input>
        {nameInputIsInValid && enteredNameIsTouched && (
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

      <div className={classes.action}>
        <button className={classes.submit}> Confirm </button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
