import "./Cart";
import "./Cart.css";
import "../pages/Checkout.css"
import TrashIcon from "../images/icons/remove-cross.svg";
import TrashIconBlack from "../images/icons/remove-cross-black.svg";
import HeartInMiddleCollage from "../images/BlackFrameBackground.png";
import ClassicCollageBlackFrame from "../images/ClassicPhotoWIthBac.png";
import HeartShapedCollage from "../images/LivingRoomPicGold.png";
import {useState, useReducer} from "react";

function SingleCartItem(props){

    /* Icon Library :) */
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    const [isBeingDeleted, setisBeingDeleted] = useState(false);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    var frame = "";
    var collagePicture = "";

    //Set picture for collage
    if(props.selectedCollageID === 1){
        collagePicture = HeartInMiddleCollage;
    }else if(props.selectedCollageID === 3){
        collagePicture = ClassicCollageBlackFrame;
    }else if(props.selectedCollageID === 2){
        collagePicture = HeartShapedCollage;
    }

    //If there is no frame
    if(props.frame === 0){
        frame = "Puudub";
    }

    function DeletetionPrompt(){
        setisBeingDeleted(true);
    }

    function CancelDelete(){
        setisBeingDeleted(false);
    }

    function DeleteCartItem(){
        console.log("Running Self-Delete");
        
        for (var i = 0; i < 20; i++) {
            const Item = "Product" + i;
            const output = JSON.parse(localStorage.getItem(Item));
            
            /* @ts-ignore */
            if(output.ID === props.ID){
                localStorage.removeItem(Item);
                
            }
        }
    }

    //How does this work?
    //From props.dataFrom we get information about where the data is coming from.
    //If props.dataFrom === Checkout, then display SingleCartItem as a table.
    //I0rom, then display SingleCartItem as cards in the cart.

    return(
        <div>
            {!props.dataFrom && !isBeingDeleted &&
            <div className="back">

                <img id="cart-picture-box" src={collagePicture} alt="Kollaažist pilt"></img>


                <div className="details">
                    <h3 id="cart-title">{props.title}</h3>
                    <div>
                        <p id="cart-size">Suurus: {props.size}</p>
                        <p>Raam: {frame}</p>
                        <h3>{props.summary}€</h3>
                    </div>
                </div>

                <img id="delete-button" src={TrashIcon} alt="Eemaldage ostukorvist" onClick={DeletetionPrompt}></img>

            </div>
            }

            {!props.dataFrom && isBeingDeleted &&
            <div className="back" style={{backgroundColor: "red"}}>

                <div className="delete-buttons">
                    <button className="btn" onClick={DeleteCartItem}>Kustuta kollaaž</button>
                    <button className="btn" onClick={CancelDelete}>Tühista</button>
                </div>

            </div>
            }

            {/* After this we are using Checkout.css */}

            {props.dataFrom &&
                <div className="checkout-back">

                <img id="checkout-picture-box" src={collagePicture} alt="Kollaažist pilt"></img>


                <div className="details">
                    <h2 id="cart-title">{props.title}</h2>
                    <div>
                        <p id="cart-size">Suurus: {props.size}</p>
                        <p>Raam: {frame}</p>
                        <h3>{props.summary}€</h3>
                    </div>
                </div>

                <img id="delete-button-checkout" src={TrashIconBlack} alt="Eemaldage ostukorvist" onClick={DeletetionPrompt}></img>

                </div>
            }
        </div>
    )
}

export default SingleCartItem;