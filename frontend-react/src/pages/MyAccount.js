import './MyAccount.css'
import History from "../components/History"

function MyAccount(props){     

    if(!props.user){
        History.push('/login');
    }

    return(
        <div>
            <hr />

            <h1 style={{textAlign: "center"}}>Minu konto:</h1>
        </div>
    )
}   

export default MyAccount;