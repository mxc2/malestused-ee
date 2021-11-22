import "./CollagesCatalog.css"
import React, { useState, useRef } from 'react';
import HeartInMiddleCollage from "../images/Collages-catalog/BlackPicFrameWithHeartMiddle (1).png"
import ClassicCollageBlackFrame from "../images/Collages-catalog/BlackFrameClassic.png"
import HeartShapedCollage from "../images/Collages-catalog/NewDesign.png"
import CollageList from '../components/Collages-components/CollageList';
import FadeIn from 'react-fade-in';
import History from "../components/History";

function CollagesCatalog(){
    const [selectedProduct, setSelectedProduct] = useState("");
    const [Continue, setContinue] = useState(false);
    const [Kujundusteenus, setKujundusteenus] = useState(false);
    const collageDescriptionRef = useRef();
    
    console.log(selectedProduct);

    //TEMPORARY
    const CollageStyles = [
        {img: HeartInMiddleCollage, title: "Südamega kollaaž", price: "3.49", id: "1", test: selectedProduct},
        {img: HeartShapedCollage, title: "Südame kujuline kollaaž", price: "3.49", id: "3", test: selectedProduct},
        {img: ClassicCollageBlackFrame, title: "Klassikaline kollaaž", price: "2.99", id: "2", test: selectedProduct},
    ];

    //Getting the selected product ID
    const setSelected=(data)=>{
        setSelectedProduct(data);
        document.getElementById("center-button").style.display = "flex";
    }

    //Once pressing "Edasi" button, get the selected collage id and show iseteenindus valikut
    function funcContinue(){
        if(selectedProduct){
            setContinue(true);
        }else{
            console.log("Please add code to if not selected");
        }
    }

    //Once pressing "Kujundusteeus" button, show kujundusteenus "lehte"
    function funcKujundusteenus(){
        setKujundusteenus(true);
        setContinue(false);
    }

    //Once typed into textarea then show button
    function funcDescription(){
        if(collageDescriptionRef){
            document.getElementById("center-button").style.display = "flex";
        }else{
            document.getElementById("center-button").style.display = "none";
        }
    }

    function funcCompleteCustomization(){
        const FinishedProduct = [{selectedCollage: selectedProduct, uploadedPictures: "Uploads", collageDescription: collageDescriptionRef.current.value}];
        
        History.push({
            pathname: '/tellimus',
            state: FinishedProduct
        });    
    }

    return(
        <div>
            <hr />

            {!Continue && Kujundusteenus && 
            
                <div>
                    <FadeIn>
                        <h1 id="header">Kujundusteenus:</h1>
                        <h2 id="header" style={{fontSize: "24px", fontWeight: "500", marginTop: "36px"}}>Palun laadige üles pildid mis lähevad kollaaži peale</h2>
                        
                        <div id="TEMP">
                            <button id="button" style={{marginTop: "24px"}}>Lae üles pildid</button>
                        </div>

                        <h2 id="header" style={{fontSize: "24px", fontWeight: "500", marginTop: "64px"}}>Palun kirjeldage soovitud kollaaži</h2>

                        <div id="TEMP">
                            <textarea id="TEMP" rows="8" cols="80" style={{marginTop: "16px"}} required ref={collageDescriptionRef} onChange={funcDescription} ></textarea>
                        </div>

                        <div id="center-button">
                            <button id="button" onClick={funcCompleteCustomization} style={{marginTop: "64px"}}>Alusta tellimusega</button>
                        </div>

                    </FadeIn>
                </div>
            
            }

            {Continue && 
                <div>
                    <FadeIn>
                        <h1 id="header">Kas kujundad kollaaži ise või kasutad kujundusteenust?</h1>
                        
                        <div id="TEMP">
                            <button id="button" style={{marginTop: "268px"}}>Kujundan ise iseteeninduses</button>
                            <button id="button" style={{marginTop: "268px"}} onClick={funcKujundusteenus}>Soovin kujundusteenust</button>
                        </div>
                    </FadeIn>
                </div>
            }

            {!Continue && !Kujundusteenus && 
                <div>
                    <FadeIn>
                        <h1 id="header">Kollaažide stiilid</h1>
                        <p id="description">Et alustada tellimust palun valige üks kollaaži stiil.</p>
                        
                        <CollageList collages={CollageStyles} selectedCollage={selectedProduct} funcSelect={setSelected}/>
                        
                        <div id="center-button">
                            <button id="button" onClick={funcContinue}>Alusta tellimusega</button>
                        </div>
                    </FadeIn>
                </div>
            }
        </div>
    )
}   

export default CollagesCatalog;