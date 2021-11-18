import './App.css'
import { Route } from 'react-router-dom'
import Home from "./pages/Home"
import Header from './components/Header'
import CollagesCatalog from './pages/CollagesCatalog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="body">
      <Header/>
      <div className="footer-position">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/kollaažid">
          <CollagesCatalog/>
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
