import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sobre from './paginas/sobre/Sobre';
import ResponsiveAppBar from "./components/statics/nav/nav";
import Constru from './constru';
// integração teste

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <ResponsiveAppBar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>
            <Route exact path='/'>
              <Constru/>
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/sobre'>
              <Sobre/>
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
