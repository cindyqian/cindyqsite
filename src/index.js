import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';

// import { GeistSans } from './fonts/geist/font/sans';
// import { GeistMono } from './fonts/geist/font/mono';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  <StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
