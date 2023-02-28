import React ,{useRef , useState }from "react";
import classes from "./CheckoutForm.module.css"


const isEmpty = (value) => value.trim() === '';
const isFiveChar = value => value.trim().length === 5;

const CheckoutForm = (props)=>{
    const[formInputValidity,setFormInputValidity] = useState({
        name: true,
        street : true,
        postalCode : true,
        city : true
    })

    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()


    const confirmHandler = (event)=>{
        event.preventDefault()
//ReadingForm values
        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostalCode= postalCodeInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredPostalCodeIsValid= isFiveChar(enteredPostalCode)
        const enteredCityIsValid = !isEmpty(enteredCity)

        setFormInputValidity({
            name: enteredNameIsValid,
            street : enteredStreetIsValid,
            city : enteredCityIsValid,
            postalCode : enteredPostalCodeIsValid
        })


        const formIsValid = 
        enteredNameIsValid && 
        enteredCityIsValid && 
        enteredStreetIsValid && 
        enteredPostalCodeIsValid

        if(!formIsValid){
            return
        }
         // submit the cart data 
        props.onConfirmOrder({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode : enteredPostalCode,
        })
    }
   


    const nameControlledClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
    const streetControlledClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
    const cityControlledClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`
    const postalCodeControlledClasses = `${classes.control} ${formInputValidity.postalCode? '' : classes.invalid}`

    return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlledClasses}>
            <label htmlFor="name">Your Name</label>
            <input type='text' id='name' ref={nameInputRef} />
            {!formInputValidity.name && <p>Enter Valid Input</p>}
        </div>
        <div className={streetControlledClasses}>
            <label htmlFor="street">Street</label>
            <input type="text"  id="street" ref={streetInputRef}/>
            {!formInputValidity.street && <p>Enter Valid street..!</p>}
        </div>
        <div className={postalCodeControlledClasses}>
            <label htmlFor="postalcode">Postal Code</label>
            <input type="text"  id="postalcode" ref={postalCodeInputRef}/>
            {!formInputValidity.postalCode && <p>Enter Valid postalCode (no long Five)</p>}
        </div>
        <div className={cityControlledClasses}>
            <label htmlFor="city">City</label>
            <input type="text"  id="city" ref={cityInputRef}/>
            {!formInputValidity.street && <p>Enter Valid city</p>}
        </div>

        <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
        <button type="button" onClick={props.onCancel}>cancel</button>

        </div>
    </form>
    )

}

export default CheckoutForm;