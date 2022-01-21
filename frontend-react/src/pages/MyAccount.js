import './MyAccount.css'
import History from "../components/History"
import { useEffect } from 'react';

function MyAccount(props){     

    if(!props.user){
        History.push('/login');
    }

    function logOut(){
        props.funcLogOut();
        History.push('/login');
    }

    useEffect(() => {
        if(props.user){
            fetch('localhost:8081/api/order/orders/' + props.user.email).then(res => {
                return res.json();
            }).then((data) => {
                console.log(data);
            });
        }
      });
    
    return(
        <div>
            <hr />

            <h1 style={{textAlign: "center"}}>Minu konto:</h1>

            <button id="logout-button" onClick={logOut}>Logi välja</button>
        </div>
    )
}   

export default MyAccount;