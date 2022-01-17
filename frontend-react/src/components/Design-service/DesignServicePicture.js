import "../../pages/CollagesCatalog.css"
import ProgressiveImage from "react-progressive-graceful-image"
import HeartInMiddleCollage from "../../images/with-background/BlackFrameBackgroundHighQuality.png"
import HeartInMiddleCollagePlacheHolder from "../../images/with-background/BlackFrameBackgroundPlaceHolder.png"


function CollagesCatalog(){

    return(
        <div className="products-container" style={{display: "flex", justifyContent: "center"}}>
            <ProgressiveImage src={HeartInMiddleCollage} placeholder={HeartInMiddleCollagePlacheHolder}>
                {(src) => <img style={{width: "100%", height: "100%", maxHeight: "720px", maxWidth: "720px"}} src={src} alt="Südamega kollaažist pilt" />}
            </ProgressiveImage>
        </div>
    );

}

export default CollagesCatalog;