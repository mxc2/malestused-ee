import './App.css'
import { Route, Router } from 'react-router-dom'
import Home from "./pages/Home"
import Header from './components/Header'
import CollagesCatalog from './pages/CollagesCatalog'
import Footer from './components/Footer'
import History from './components/History'
import Order from './pages/Order'
import Registration from './components/Registration'
import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [user, setUser] = useState();
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
            <Order/>
          </Route>
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
