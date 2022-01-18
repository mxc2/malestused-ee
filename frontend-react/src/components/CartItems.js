import "./Cart.css"
import SingleCartItem from "./SingleCartItem";

function CartItems(props) {

  return(<div>
    {props.items.map(product=> (
     <SingleCartItem
      key={product.ID}
      ID={product.ID}
      selectedCollageID={product.selectedCollageID}
      title={product.title}
      size={product.Selectvalue}
      price={product.price}
      frame={product.frame}
      summary={product.summary}
      dataFrom={product.dataFrom}/>
    ))}
  </div>); 
}

export default CartItems;