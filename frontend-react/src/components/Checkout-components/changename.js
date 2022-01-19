import React, { useRef } from "react";
import "./changename.css"

export default function Changename(props){
    const firstnameInputRef = useRef();
    const surnameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();

    function formSubmitHandler(e){
        const firstnameValue = firstnameInputRef.current.value;
        const surnameValue = surnameInputRef.current.value;
        const emailValue = emailInputRef.current.value;
        const phoneValue = phoneInputRef.current.value;

        props.funcDetails({"firstname": firstnameValue, "surname": surnameValue, "email": emailValue, "phone": phoneValue});
    }
    return(
        <div className="user-details">
            <h3 style={{textAlign: "center"}}>Tellija andmed:</h3>
            <div className="row-input">
                <div className="col-25">
                    <label for="first-name">Eesnimi:</label>
                </div>
                <div className="col-75">
                    <input type="text" id="first-name" onChange={formSubmitHandler} ref={firstnameInputRef}></input>
                </div>
            </div>
            <div className="row-input">
                <div className="col-25">
                    <label for="last-name">Perekonna nimi:</label>
                </div>
                <div className="col-75">
                    <input type="text" id="last-name" onChange={formSubmitHandler} ref={surnameInputRef}></input>
                </div>
            </div>
            <div className="row-input">
                <div className="col-25">
                    <label for="email">Email:</label>
                </div>
                <div className="col-75">
                    <input type="text" id="email" onChange={formSubmitHandler} ref={emailInputRef}></input>
                </div>
            </div>
            <div className="row-input">
                <div className="col-25">
                    <label for="phone">Telefon:</label>
                </div>
                <div className="col-75">
                    <input type="text" id="phone" onChange={formSubmitHandler} ref={phoneInputRef}></input>
                </div>
            </div>
        </div>
    );
}
