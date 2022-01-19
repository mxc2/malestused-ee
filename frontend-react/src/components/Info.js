import "./Info.css"

function Info(props){

    //Declarations
    var image = "";
    var text = "";

    //Choose what side is the image and text on
    if(props.location === "1"){
        image = "image";
        text = "text";
    }else if(props.location === "2"){
        image = "image-reversed";
        text = "text-reversed";
    }

    return(
        <div className="info-content">
            <div className="row">
                <div>
                    <img className={image} src={props.img} alt="Describing text"></img>
                </div>
                <div className={text}>
                    <h2 style={{textAlign: "center"}}>{props.header}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Info;