import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/SignupPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import ProductPage from './landing_page/product/ProductPage';
import AboutPage from '../src/landing_page/About/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Login from './landing_page/signup/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup' element={<SignupPage/>} ></Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/product' element={<ProductPage/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/pricing' element={<PricingPage/>}></Route>
    <Route path='/support' element={<SupportPage/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);



