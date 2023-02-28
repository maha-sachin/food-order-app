import React from "react";

import classes from "./Input.module.css"

const Input = React.forwardRef((props,ref) =>{
    console.log(props)

    return <div className={classes.input}>
        <label htmlFor={props.inputProps.id}>{props.label}</label>
        <input ref={ref} {...props.inputProps}/>
        {/* <input ref={ref} 
        type={props.inputProps.type} 
        min={props.inputProps.min} 
        max={props.inputProps.max} 
        step={props.inputProps.step} 
        defaultValue={props.inputProps.defaultValue} 
        id={props.inputProps.id} /> */}
    </div>

})
export default Input