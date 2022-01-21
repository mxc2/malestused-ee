import "./Cart.css";
import "../pages/Checkout.css"
import TrashIcon from "../images/icons/remove-cross.svg";
import HeartInMiddleCollage from "../images/with-background/BlackFrameBackground.png";
import ClassicCollageBlackFrame from "../images/with-background/ClassicPhotoWIthBacPlaceHolder.png";
import HeartShapedCollage from "../images/with-background/LivingRoomPicGoldPlaceHolder.png";
import {useState, useReducer} from "react";

function SingleCartItem(props){

    const [isBeingDeleted, setisBeingDeleted] = useState(false);
    const [Deleted, setDeleted] = useState(false);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    var collagePicture = "";

    //Set picture for collage
    if(props.selectedCollageID === 1){
        collagePicture = HeartInMiddleCollage;
    }else if(props.selectedCollageID === 3){
        collagePicture = ClassicCollageBlackFrame;
    }else if(props.selectedCollageID === 2){
        collagePicture = HeartShapedCollage;
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
            try {
                const output = JSON.parse(localStorage.getItem(Item));

                if(output.ID === props.ID){
                    props.funcDelete(output.ID);
                    localStorage.removeItem(Item);

                    setDeleted(true);
                    forceUpdate();
                    break;
                }
            }
            catch(err){
                console.log(err);
            }         
        }
    }

    //How does this work?
    //From props.dataFrom we get information about where the data is coming from.
    //If props.dataFrom === Checkout, then display SingleCartItem as a table.
    //If not, then display SingleCartItem as cards in the cart.

    return(
        <div>
            {!props.dataFrom && !isBeingDeleted &&
            <div className="back">

                <img id="cart-picture-box" src={collagePicture} alt="Kollaažist pilt"></img>


                <div className="details">
                    <h3 id="cart-title">{props.title}</h3>
                    <div>
                        <p id="cart-size">Suurus: {props.size}</p>
                        <p>Raam: {props.frame}</p>
                        <h3 id="collage-total">{props.summary}€</h3>
                    </div>
                </div>

                <img id="delete-button" src={TrashIcon} alt="Eemaldage ostukorvist" onClick={DeletetionPrompt}></img>

            </div>
            }

            {!props.dataFrom && isBeingDeleted && !Deleted &&
            <div className="back" style={{backgroundColor: "red"}}>

                <div className="delete-buttons">
                    <button className="btn" onClick={DeleteCartItem}>Kustuta kollaaž</button>
                    <button className="btn" onClick={CancelDelete}>Tühista</button>
                </div>

            </div>
            }

            {!props.dataFrom && !isBeingDeleted && Deleted &&
            <div>
            </div>
            }

            {/* After this we are using Checkout.css */}

            {props.dataFrom &&
            <table className="checkout-table">
                <tbody>
                    <tr>
                        <th>Pilt</th>
                        <th>Nimi</th>
                        <th>Suurus</th>
                        <th>Raam</th>
                        <th>Hind</th>
                        <th>Valikud:</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="checkout-table-image"><img style={{width: "100%"}} src={collagePicture} alt="Kollaažist pilt"></img></td>
                        <td className="checkout-table-title">{props.title}</td>
                        <td>{props.size}</td>
                        <td>{props.frame}</td>
                        <td id="collage-total">{props.summary}€</td>
                        <td style={{width: "20px", color: "red"}}><p style={{ cursor: "pointer"}} onClick={DeleteCartItem}>Eemalda</p></td>
                    </tr>
                </tbody>
              </table>
            }
        </div>
    )
}

export default SingleCartItem;