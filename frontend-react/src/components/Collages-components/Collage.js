import "../../pages/CollagesCatalog.css"

function Collages(props){

    var CollageStyle = "";

    if(props.id === props.test){
        CollageStyle = "collage-image-active";
    }else{
        CollageStyle = "collage-image";
    }
    
    function SelectedCollage(){
        props.funcSelect(props.id);
    }

    return(
        <div className="card">
            <div className="product" onClick={SelectedCollage}>
                <img id={CollageStyle} src={props.img} alt="Collage"></img>
                <h3>{props.title}</h3>
                <p>Alates: {props.price} €</p>
            </div>
        </div>
    )
}

export default Collages;