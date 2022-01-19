import "./Login.css"
import PropTypes from 'prop-types';
import { useState } from "react";

export default function Login({setUser}){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState("");
  

  async function loginUser(credentials) {
    const response = await fetch('http://localhost:8081/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
			body: JSON.stringify(credentials)
    })
    const data = await response.json();
    return data
  }


  const onFinish = async e => {

    if(email && password){
        const token = await loginUser({
          email,
          password
        });
        if(token.token) {
          setUser(token);
          setError("")
        }else if(token.error){
          setError(token.error)
        } else {
          setError(token.msg['0'].msg)
        }
      }else{
        setError("Palun sisestage email ja parool");
      }
    }
    

    return(
      
      <div>
        <hr />
        
        <div className="form-body">

          <h1 style={{marginBottom: "16px"}}>Logimine</h1>


          <label for="email">Email:</label>
          <input id="email" type="email" onChange={e => setEmail(e.target.value)} />

          <label for="password">Parool:</label>
          <input id="password" type="password" onChange={e => setPassword(e.target.value)} />
          <p style={{marginTop: "16px", marginBottom: "16px", color: "red"}}>{error}</p>

          <button id="button" style={{marginLeft: "auto", width: "50%"}} onClick={onFinish}>Logi Sisse</button>

      </div>
    </div>
  );
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
};