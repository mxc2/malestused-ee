import "./Cart";
import "./Cart.css";
import "../pages/Checkout.css"
import TrashIcon from "../images/icons/remove-cross.svg";
import TrashIconBlack from "../images/icons/remove-cross-black.svg";
import HeartInMiddleCollage from "../images/with-background/BlackFrameBackground.png";
import ClassicCollageBlackFrame from "../images/with-background/ClassicPhotoWIthBac.png";
import HeartShapedCollage from "../images/with-background/LivingRoomPicGold.png";
import {useState, useReducer} from "react";

function SingleCartItem(props){

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
            try {
                const output = JSON.parse(localStorage.getItem(Item));

                if(output.ID === props.ID){
                    localStorage.removeItem(Item);
                    forceUpdate();
                    break;
                }
                
            }
            catch(err){}         
        }
    }

    function DeleteItem(){
        console.log(props);
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
            <table className="checkout-table">
                <tr>
                    <th>Pilt</th>
                    <th>Nimi</th>
                    <th>Suurus</th>
                    <th>Raam</th>
                    <th>Hind</th>
                    <th>Valikud:</th>
                </tr>
                <tr>
                    <td style={{width: "10%"}}><img style={{width: "100%"}} src={collagePicture}></img></td>
                    <td style={{maxWidth: "64px"}}>{props.title}</td>
                    <td>{props.size}</td>
                    <td>{props.frame}</td>
                    <td>{props.summary}€</td>
                    <td style={{width: "20px"}}><a onClick={DeleteCartItem}>Eemalda</a></td>
                </tr>
              </table>
            }
        </div>
    )
}

export default SingleCartItem;