import "../../pages/CollagesCatalog.css"
import ProgressiveImage from "react-progressive-graceful-image" //Delay=400, to replace the low quality image with a higher quality image AFTER the fade in, not before
import { Switch, Case } from "react-if"
import HeartInMiddleCollage from "../../images/with-background/BlackFrameBackgroundHighQuality.png"
import HeartInMiddleCollagePlacheHolder from "../../images/with-background/BlackFrameBackgroundPlaceHolder.png"
import HeartShapedCollage from "../../images/with-background/LivingRoomPicGold.png"
import HeartShapedCollagePlaceHolder from "../../images/with-background/LivingRoomPicGoldPlaceHolder.png"
import ClassicCollage from "../../images/with-background/ClassicPhotoWIthBac.png"
import ClassicCollagePlaceHolder from "../../images/with-background/ClassicPhotoWIthBacPlaceHolder.png"

function CollagesCatalog(props){

    //1 heartinmiddle, 2 heartshaped, 3 classic

    return(
        <div className="products-container" style={{display: "flex", justifyContent: "center"}}>
            <Switch>
                <Case condition={props.SelectedProduct === 1}>
                    <ProgressiveImage delay={400} src={HeartInMiddleCollage} placeholder={HeartInMiddleCollagePlacheHolder}>
                        {(src) => <img style={{width: "100%", height: "100%", maxHeight: "720px", maxWidth: "720px"}} src={src} alt="Südamega kollaažist pilt" />}
                    </ProgressiveImage>
                </Case>
                <Case condition={props.SelectedProduct === 2}>
                    <ProgressiveImage delay={400} src={HeartShapedCollage} placeholder={HeartShapedCollagePlaceHolder}>
                        {(src) => <img style={{width: "100%", height: "100%", maxHeight: "720px", maxWidth: "720px"}} src={src} alt="Südame kujuline kollaažist pilt" />}
                    </ProgressiveImage>
                </Case>
                <Case condition={props.SelectedProduct === 3}>
                    <ProgressiveImage delay={400} src={ClassicCollage} placeholder={ClassicCollagePlaceHolder}>
                        {(src) => <img style={{width: "100%", height: "100%", maxHeight: "720px", maxWidth: "720px"}} src={src} alt="Südamega kollaažist pilt" />}
                    </ProgressiveImage>
                </Case>
            </Switch> 
        </div>
    );

}

export default CollagesCatalog;