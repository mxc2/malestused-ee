import Order from "./Order";

function AllOrders(props) {

  return(<div>
    {props.infos.map(info=> (
      <Order 
      key={info._id}
      title={info.title}
      size={info.Selectvalue}
      frame={info.frame}
      transCo={info.transCo}
      location={info.parcelAddress}
      time={info.createdAt}/>
    ))}
  </div>); 
}

export default AllOrders;