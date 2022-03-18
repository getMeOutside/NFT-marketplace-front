import Header from './components/header';
import React from 'react'
import { useState } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import {
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import Login from './components/Auth/Login';
import Product from './components/Product/Product';
import Card from './components/Product/Card/Card';


const App = () => {
  return (
    <div className="App">   
      <div className='Main-content'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='product'>
              <Route path=':cardId' element={<Card />} />
            </Route>
          <Route path="login" element={<Login />} />
          <Route path='*' element={<div>404</div>}/>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>  
    </div>
  );
}

export default App;
