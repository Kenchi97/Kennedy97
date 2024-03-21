import React,{useEffect} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Services from './components/Services'
import Tracking from './components/Tracking'
import Contact from './components/Contact'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {   
    AOS.init({
      duration:3000,
      once:false
    });
  }, [])




  return (
  <>
  <Header></Header>
  <Router>
    <Routes>
      <Route exact path="/" element={<Homepage></Homepage>}></Route>
      <Route exact path="/services" element={<Services></Services>}></Route>
      <Route exact path= "/tracking" element={<Tracking></Tracking>}></Route>
      <Route exact path= "/contact" element={<Contact></Contact>}></Route>
    </Routes>
  </Router>
  <Footer></Footer>
  </>
  ) ;
} ;

export default App;
