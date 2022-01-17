import "./ShippingLocation.css"
import DPD from "../../images/Transport-images/DPD.png"
import Itella from "../../images/Transport-images/Itella.jfif"
import Omniva from "../../images/Transport-images/Omniva.jfif"

function ShippingLocation(){

    function Click(props){
        console.log("Hey");
        console.log(props.value);
    }

    return(
        <div className="shipping-location">
            <h3 style={{textAlign: "center"}}>Transport:</h3>
            <div style={{margin: "auto", alignItems: "center"}} className="row-input">
                <label>Vali firma</label>
                <img src={DPD} id="transport-company-image" value="1"></img>
                <img src={Itella} id="transport-company-image" value="2"></img>
                <img src={Omniva} id="transport-company-image" value="3" OnClick={Click}></img>
            </div>
            <div className="row-input">
                <div className="col-25">
                    <label>Pakiautomaadi asukoht:</label>
                </div>
                <div className="col-75">
                    <select>
                        <option>Test 1</option>
                        <option>Test 2</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ShippingLocation;