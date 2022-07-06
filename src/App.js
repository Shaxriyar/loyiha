import './App.css';

// import Router-dom
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//AOS import
import AOS from "aos";
import "aos/dist/aos.css";

//components
import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Container from './components/Container/Container'
import Turnir from './components/Container/4-Turnir/Turnir';
import Digital from './components/Container/2-Digital/Digital';
import Qoshish from './components/Container/3-Qoshish/Qoshish';
import Footer from './components/Container/5-Footer/Footer';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='App'>

         <Navbar />
         <Container />
         <Footer />

       {/* <Navbar /> */}
    </div>
  );
}

export default App;
