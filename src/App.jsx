import './App.css'
import Header from './components/Header'
import Home from './components/Homepage'
import Footer from './components/Footer'
import Service from './components/Service'
import Tracking from './components/Tracking'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      offset: 50, // offset (in px) from the original trigger point
      duration: 3000, // duration (in ms) of animations
      easing: 'ease', // default easing for AOS animations
      once: true // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/tracking" element={<Tracking />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />

    </>
  )
}

export default App