import { useState } from "react";

const useInput = (validatetValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validatetValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const inputBlurHandler = (event) => {
    setEnteredValue(event.target.id);
    setIsTouched(true);
    console.info("blur", event.target.id);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
