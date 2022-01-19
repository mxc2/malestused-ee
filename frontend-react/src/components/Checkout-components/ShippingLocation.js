import "./ShippingLocation.css"
import React, { useState } from "react"
import DPD from "../../images/Transport-images/DPD.png"
import Itella from "../../images/Transport-images/Itella.jfif"
import Omniva from "../../images/Transport-images/Omniva.jfif"
import Select from "react-select";

function ShippingLocation(props){

    const [locations, setLocations] = useState();
    const [company, setCompany] = useState();
    const [value, setValue] = React.useState({});

    
    if(value){
        props.funcSendData({"transCo": company, "parcelAddress": value.Address});
    }

    function ClickOmniva(){
        setLocations(null);
        fetch('http://localhost:8081/service/omniva').then(res => {
            return res.json();
        }).then((data) => {
            setLocations(data);
            setCompany("Omniva");
        });
    }

    function ClickItella(){
        setLocations(null);
        fetch('http://localhost:8081/service/itella').then(res => {
            return res.json();
        }).then((data) => {
            setLocations(data);
            setCompany("Itella");
        });
    }

    function ClickDpd(){
        setLocations(null);
        fetch('http://localhost:8081/service/dpd').then(res => {
            return res.json();
        }).then((data) => {
            setLocations(data);
            setCompany("Dpd");
        });
    }

    return(
        <div className="shipping-location">
            <h3 style={{textAlign: "center", paddingBottom: "12px"}}>Transport:</h3>
            <div style={{margin: "auto", alignItems: "center"}} className="row-input">
                <div className="col-25">
                    <label>Vali firma:</label>
                </div>
                <div className="col-75">
                    <img src={DPD} id="transport-company-image" alt="DPD" value="1" onClick={ClickDpd}></img>
                    <img src={Itella} id="transport-company-image" alt="Itella" value="2" onClick={ClickItella}></img>
                    <img src={Omniva} id="transport-company-image" alt="Omniva" value="3" onClick={ClickOmniva}></img>
                </div>
            </div>
            <div className="row-input" style={{paddingTop: "8px"}}>
                <div className="col-25">
                    <label>Pakiautomaadi asukoht:</label>
                </div>
                <div className="col-75">
                    <Select
                        name="accounts"
                        options={locations}
                        value={value}
                        onChange={setValue}
                        getOptionLabel={(location) => location.Address}
                        getOptionValue={(location) => location._id} // It should be unique value in the options. E.g. ID
                    />
                </div>
            </div>
        </div>
    );
}

export default ShippingLocation;