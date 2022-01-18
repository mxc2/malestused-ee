import "./CollagesCatalog.css"
import React, { useState, useRef } from 'react';
import BackArrow from "../images/icons/double-arrow-left.svg"
import HeartInMiddleCollage from "../images/Collages-catalog/BlackPicFrameWithHeartMiddle (1).png"
import ClassicCollageBlackFrame from "../images/Collages-catalog/BlackFrameClassic.png"
import HeartShapedCollage from "../images/Collages-catalog/NewDesign.png"
import CollageList from '../components/Collages-components/CollageList';
import SelfDesign from "../components/Self-design-components/SelfDesign";
import FadeIn from "react-fade-in/lib/FadeIn";
import History from "../components/History";
import { If } from 'react-if';
import DesignService from "../components/Design-service/DesignService";

function CollagesCatalog(){
    const [selectedProduct, setSelectedProduct] = useState("");
    const [Continue, setContinue] = useState(false);
    const [Kujundusteenus, setKujundusteenus] = useState(false);
    const [IseKujundus, setIseKujundus] = useState(false);
    const collageDescriptionRef = useRef();
    
    console.log(selectedProduct);

    //TEMPORARY
    const CollageStyles = [
        {img: HeartInMiddleCollage, title: "Südamega kollaaž", price: 3.49, A3price: 6.99, id: 1, test: selectedProduct},
        {img: HeartShapedCollage, title: "Südame kujuline kollaaž", price: 3.49, A3price: 6.99, id: 2, test: selectedProduct},
        {img: ClassicCollageBlackFrame, title: "Klassikaline kollaaž", price: 2.99, A3price: 5.99, id: 3, test: selectedProduct},
    ];

    console.log(CollageStyles[selectedProduct-1]);

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
        setIseKujundus(false);
        setContinue(false);
    }

    function funcIseKujundus(){
        setIseKujundus(true);
        setKujundusteenus(false);
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

    function funcBackFromContinue(){
        setKujundusteenus(false);
        setIseKujundus(false);
        setContinue(false);
        setSelectedProduct("");
    }

    function funcBackFromKujundusteenus(){
        setKujundusteenus(false);
        setIseKujundus(false);
        setContinue(true);
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
            <hr id="header-line" />

            {!Continue && IseKujundus && 
            
                <div>
                    <FadeIn>
                        {/* Give SelfDesign the right collage style */}
                        <SelfDesign SelfDesignSelectedCollage={CollageStyles[selectedProduct-1]}/>
                    </FadeIn>
                </div>
        
            }

            {!Continue && Kujundusteenus && 

            <div>

                <FadeIn>
                    <DesignService SelectedProduct={selectedProduct} SelfDesignSelectedCollage={CollageStyles[selectedProduct-1]} />
                    {/*<button id="button" style={{marginTop: "50px"}} onClick={funcBackFromKujundusteenus}>Tagasi</button>*/}
                </FadeIn>
            </div>
            
            }

            {Continue && 
                <div>
                    <FadeIn>
                        <h1 id="header">Kas kujundad kollaaži ise või kasutad kujundusteenust?</h1>
                        
                        <div id="TEMP">
                            <If condition={selectedProduct == 3}>
                                <button id="button" style={{marginTop: "268px", width: "540px"}} onClick={funcIseKujundus}>Kujundan ise iseteeninduses</button>
                            </If>
                            <button id="button" style={{marginTop: "268px", width: "540px"}} onClick={funcKujundusteenus}>Soovin kujundusteenust</button>
                        </div>

                        <div id="TEMP">
                            <button id="button" style={{marginTop: "268px"}} onClick={funcBackFromContinue}><i styles={{backgroundImage: BackArrow}}></i>Tagasi</button>
                        </div>
                        
                    </FadeIn>
                </div>
            }

            {!Continue && !Kujundusteenus && !IseKujundus &&
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