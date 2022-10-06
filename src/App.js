import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Routes,Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
function App() {
  return (
   <>
   <NavBar />
    <Routes>
      
 <Route  exact path='/'element={<Home/>}/>
<Route  exact path='/about'element={<About/>}/>
<Route exact path='/contact'element={<Contact/>}/>
<Route exact path='/services'element={<Services/>}/> */


</Routes>
</>
  );
}

export default App;
