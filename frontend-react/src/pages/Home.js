import './Home.css'
import React from 'react';
import Hero from '../components/Hero';
import InfoList from '../components/InfoList';
import Reviews from '../home-components/Reviews';
import HeartInMiddleCollage from "../images/with-background/BlackFrameBackground.png"
import ClassicCollageBlackFrame from "../images/with-background/ClassicPhotoWIthBac.png"
import JustAnImage from "../images/JustAnImage.jpg"

function Home(){     

    const FirstHeader = 'Mis on mälestused.ee?';
    const SecondHeader = 'Kvaliteet.';
    const ThirdHeader = 'Kes me oleme?';

    const Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, turpis ac efficitur hendrerit, enim urna luctus lacus, vel aliquet libero ligula sit amet diam. Nullam id pellentesque risus, sed consectetur elit. Praesent at varius sapien. Sed mattis laoreet dictum. Phasellus faucibus interdum sapien eu dapibus. Ut a tempus ligula. ";

    const FirstInfo = [{header: FirstHeader, text: Text, img: HeartInMiddleCollage, location: "1"}];

    const SecondInfo = [{header: SecondHeader, text: Text, img: ClassicCollageBlackFrame, location: "2"}];

    const ThirdInfo = [{header: ThirdHeader, text: Text, img: JustAnImage, location: "1"}];

    return(
        <div>
            <Hero></Hero>
            <InfoList infos={FirstInfo} />          
            <InfoList infos={SecondInfo} /> 
            <Reviews />
            <InfoList infos={ThirdInfo} />
        </div>
    )
}   

export default Home;