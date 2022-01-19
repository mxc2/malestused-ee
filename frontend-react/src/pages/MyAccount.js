import './MyAccount.css'
import History from "../components/History"

function MyAccount(props){     

    if(!props.user){
        History.push('/login');
    }

    function logOut(){
        props.funcLogOut();
        History.push('/login');
    }
    
    return(
        <div>
            <hr />

            <h1 style={{textAlign: "center"}}>Minu konto:</h1>

            <button id="logout-button" onClick={logOut}>Logi välja</button>
        </div>
    )
}   

export default MyAccount;