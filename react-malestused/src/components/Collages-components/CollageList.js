import Collage from "./Collage";
import "../../pages/CollagesCatalog.css"

function CollageList(props) {

  return(<div className="grid">
    {props.collages.map(collage=> (
     <Collage 
      img={collage.img}
      title={collage.title}
      price={collage.price}
      id={collage.id}
      test={collage.test}
      funcSelect={props.funcSelect}/>
    ))}
  </div>); 
}

export default CollageList;