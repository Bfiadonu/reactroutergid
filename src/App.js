import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Basics from './components/Basics'
import Types from './components/Types'
import Equipment from './components/Equipment'
import Where from './components/Where'
import Safety from './components/Safety'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <div id="wrapper">
      <Header />

      <BrowserRouter>
    <div>
     <Navigation />
      <Routes>
        <Route exact path="/" element={<Basics/>} />
        <Route path="/types" element={<Types/>} />
        <Route path="/equipment" element={<Equipment/>} />
        <Route path="/where" element={<Where/>} />
        <Route path="/safety" element={<Safety/>} />
      </Routes>
    </div>
  </BrowserRouter>
  <Footer />
    </div>
  );
}

export default App;
