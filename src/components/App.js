// import logo from '../logo.svg';
import './index.css'; //FIXXX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { ColorfulLink } from './ColorfulLink.js';
import React from 'react';
import TechnicalPortfolio from './TechnicalPortfolio';
import CreativePortfolio from './CreativePortfolio';
import HomePage from './HomePage';
import { Footer } from './Footer';
import { BrowserRouter, Routes, Link, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
import Chatbot from './Chatbot';

function App() {


  // let navigate = useNavigate();
  // navigate("/", { replace: true });
  const routerBaseName = process.env.PUBLIC_URL;



  const root = ReactDOM.createRoot(document.getElementById('root'));
  document.querySelector("body").setAttribute("class", "all-body");
  root.render(

    <React.StrictMode>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet" />
      <link rel="icon" type="image/png" href="img/favicon.png" />
      <BrowserRouter basename={routerBaseName}>
      {/* ReactDOM.render(<Router basename={routerBaseName}>< App /></Router>, document.getElementById(‘root’)); */}
            {/* <NavBar/> */}
                <Routes>
                <Route path="/" element={<HomePage />} />
                    <Route path="/TechnicalPortfolio" element={<TechnicalPortfolio/> } />
                    <Route path="/CreativePortfolio" element={<CreativePortfolio/> } />
                    <Route path="/Chatbot" element={<Chatbot/> } />
                    <Route render={() => { <HomePage /> }} />
                </Routes>  
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>


  );
}

export default App;
