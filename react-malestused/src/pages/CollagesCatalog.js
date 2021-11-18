import "./CollagesCatalog.css"
import React, { useState } from 'react';
import HeartInMiddleCollage from "../images/Collages-catalog/BlackPicFrameWithHeartMiddle (1).png"
import ClassicCollageBlackFrame from "../images/Collages-catalog/BlackFrameClassic.png"
import HeartShapedCollage from "../images/Collages-catalog/NewDesign.png"
import CollageList from '../components/Collages-components/CollageList';

function CollagesCatalog(){
    const [selectedProduct, setSelectedProduct] = useState([{selected: ""}])
    const [Continue, setContinue] = useState(false);
    
    console.log(selectedProduct);

    //TEMPORARY
    const CollageStyles = [
        {img: HeartInMiddleCollage, title: "Südamega kollaaž", price: "3.49", id: "1"},
        {img: HeartShapedCollage, title: "Südame kujuline kollaaž", price: "3.49", id: "3"},
        {img: ClassicCollageBlackFrame, title: "Klassikaline kollaaž", price: "2.99", id: "2"},
    ];

    //Getting the selected product ID
    const setSelected=(data)=>{
        setSelectedProduct(data);
    }

    //Once pressing "Edasi" button, get the selected collage id and show iseteenindus valikut
    function funcContinue(){
        if(selectedProduct){
            console.log(selectedProduct);
            setContinue(true);
        }
    }

    return(
        <div>
            <hr />

            {Continue && 
                <div>
                    <h1 id="header">Kas kujundad kollaaži ise või kasutad kujundusteenust?</h1>
                    
                    <div className="center-button TEMP">
                        <button id="button">Kujundan ise iseteeninduses</button>
                        <button id="button">Soovin kujundusteenust</button>
                    </div>
                </div>
            }

            {!Continue && 
                <div>
                    <h1 id="header">Kollaažide stiilid</h1>
                    <p id="description">Et alustada tellimust palun valige üks kollaaži stiil.</p>
                    
                    <CollageList collages={CollageStyles} selectedCollage={selectedProduct} funcSelect={setSelected}/>

                    <div className="center-button">
                        <button id="button" onClick={funcContinue}>Edasi</button>
                    </div>
                </div>
            }
        </div>
    )
}   

export default CollagesCatalog;