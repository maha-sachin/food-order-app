import React,{Fragment} from "react";
import  ReactDOM  from "react-dom";
import classes from './Modal.module.css'
//onCloseBackDrop prop for hidecart
const Backdrop = props =>{
    return <div className={classes.backdrop} onClick={props.onCloseBackDrop}></div>//first 1 what value expected on your own  oncloseback
}

const ModalOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal=props=>{

    return (<Fragment>
        {/* here we need to set the onCloseBackDrop prop bcz we added it inside of backdrop and expect onCloseModal from modal jsx */}
        {ReactDOM.createPortal(<Backdrop onCloseBackDrop={props.onCloseModal}/> ,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> ,portalElement)}

    </Fragment>)
}

export default Modal