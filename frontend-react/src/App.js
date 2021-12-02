import './App.css'
import { Route, Router } from 'react-router-dom'
import Home from "./pages/Home"
import Header from './components/Header'
import CollagesCatalog from './pages/CollagesCatalog'
import Footer from './components/Footer'
import History from './components/History'
import Order from './pages/Order'
import Registration from './components/Registration'

function App() {
  return (
    <Router history={History}>
      <div className="body">
        <Header/>
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
          <Route path="/register">
            <Registration />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
