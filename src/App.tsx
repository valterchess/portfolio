import React from 'react';
import NavBar from './components/statics/navbar/NavBar';
import Footer from './components/statics/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
		</>
  );
}

export default App;
