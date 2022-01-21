import { useState } from "react";
import History from "../History";
import "../../App.css"

function Registration(){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();

  async function registerUser(credentials) {
    const response = await fetch('http://localhost:8081/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const data = await response.json();
    console.log(data)
    return data
  }


  const onFinish = async e => {
    if(email && password && firstName && lastName){
      if(confirmPassword === password){
        const registered = await registerUser({ 
          firstName,
          lastName,
          email,
          password
        });
        if(registered.error) {
          setError(registered.error)
        }else if(registered.message){
          setError("Konto loodud!")
          History.push('/my-account');
          
        } else {
          setError(registered.msg['0'].msg)
        }
      } else {
        setError("Passwords don't match!")
      }
    }else{
      setError("Kõik väljad pole täidetud!")
    }
  }
    

    return(
      <div>
        <hr />

        <div className="form-body">

          <h1 style={{ marginBottom: "16px" }}>Registeerimine</h1>

          <label for="first-name">Esinimi:</label>
          <input id="first-name" type="text" onChange={e => setFirstName(e.target.value)} />

          <label for="last-name">Perekonna nimi:</label>
          <input id="last-name" type="text" onChange={e => setLastName(e.target.value)} />

          <label for="email">Email:</label>
          <input id="email" type="email" onChange={e => setEmail(e.target.value)} />

          <label for="password">Parool:</label>
          <input id="password" type="password" onChange={e => setPassword(e.target.value)} />

          <label for="password">Kinnitage parool:</label>
          <input id="password" type="password" onChange={e => setConfirmPassword(e.target.value)} />

          <p style={{ marginTop: "16px", marginBottom: "16px", color: "red" }}>{error}</p>

          <button id="button" style={{ marginLeft: "0px" }} onClick={onFinish}>Logi Sisse</button>
        </div>
      </div>
  );
}

export default Registration