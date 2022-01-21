import './MyAccount.css'
import History from "../components/History"
import { useEffect, useState } from 'react';
import AllOrders from '../components/Profile/AllOrders';

function MyAccount(props){    
    
    const[products, setProducts] = useState([])

    if(!props.user){
        History.push('/login');
    }

    function logOut(){
        props.funcLogOut();
        History.push('/login');
    }

    useEffect(() => {
        if(props.user){
            fetch('http://localhost:8081/api/order/orders/' + props.user.email).then(res => {
                return res.json();
            }).then((data) => {
                setProducts(data);
            });
        }
      }, []);
    
    return(
        <div>
            <hr />

            <h1 style={{textAlign: "center"}}>Minu konto:</h1>

            <h2 style={{textAlign: "center"}}>Minu tellimused:</h2>

            <AllOrders infos={products}></AllOrders>
            
            <button id="logout-button" style={{marginTop: "32px"}} onClick={logOut}>Logi välja</button>
        </div>
    )
}   

export default MyAccount;