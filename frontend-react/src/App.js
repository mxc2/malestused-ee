import './App.css'
import { Route, Router } from "react-router-dom"
import Home from "./pages/Home"
import Header from './components/Header'
import CollagesCatalog from './pages/CollagesCatalog'
import Footer from './components/Footer'
import History from './components/History'
import Checkout from './pages/Checkout'
import Registration from './components/Account/Registration'
import { useState } from 'react'
import Login from './components/Account/Login'
import Testingupload from "./components/file-upload"
import MyAccount from './pages/MyAccount'

function App() {
  const [user, setUser] = useState();

  function Logout(){
    setUser(null);
  }

  return (
    <Router history={History}>
      <Header user={user} />
      <div className="body">
        <div className="footer-position">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/kollaažid">
            <CollagesCatalog/>
          </Route>
          <Route path="/tellimus">
            <Checkout user={user}/>
          </Route>
		      <Route exact path="/register" component={Registration} />
          <Route exact path="/login">
            <Login setUser={setUser} user={user} />
          </Route>
          <Route path="/test">
            <Testingupload/>
          </Route>
          <Route path="/my-account">
            <MyAccount funcLogOut={Logout} user={user} />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
