// import logo from '../logo.svg';
import './Homepage.css'; //FIXXX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { ColorfulLink } from './ColorfulLink.js';
import React from 'react';

import { useRef, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';



function HomePage() {

  
  // const navigate = useNavigate();

  // const handleClick = (textType) => {
  //   if (textType == "technical") {
  //     navigate('/TechnicalPortfolio');
  //   }

  //   if (textType == "creative") {
  //     navigate('/CreativePortfolio');
  //   }
  // };


  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-20 gap-16 geist-mono">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div id="mainText" className="w-1/3 top-0 self-center my-32 z-50">
          <h1 className="text-xl text-center mb-10 geist-mono" id="cindyqian">
            Cindy Qian
                </h1>

          <p className="text-sm text-left geist-mono inline">
            Hello! I’m passionate about building products and curating experiences that empower people
            to express themselves in creative and meaningful ways. My creativity thrives
            when I’m helping others bring their ideas to life. Take a look at my portfolios below :)

          </p>
          <br></br><br></br>

          <div className="" >
            <div className="table-row">

              <div className="table-cell px-10">
                {/* <ColorfulLink textType="technical" link="#" text="Technical Portfolio"></ColorfulLink> */}
                {/* <a target="_blank" style={{textDecoration: "none"}} className="font-medium text-yellow-500 hover:text-yellow-600" onClick={handleClick("technical")}>Technical Portfolio</a> */}
                <a href='/TechnicalPortfolio' target="_blank" style={{textDecoration: "none"}} className="font-medium text-yellow-500 hover:text-yellow-600">Technical Portfolio</a>

              </div>

              <div className="table-cell px-10">
                {/* <ColorfulLink textType="creative" link="#" text="Creative Portfolio"></ColorfulLink> */}
                <a href='/CreativePortfolio' target="_blank" style={{textDecoration: "none"}} className="font-medium text-rose-400 hover:text-rose-500">Creative Portfolio</a>
              </div>

            </div>
          </div>

          <div className="table w-full table-fixed border-spacing-10 " >
            <div className="table-row">

              <div className="table-cell px-10" id="resume">
                {/* Resume */}
                <a href={require("../assets/CindyQianResume.pdf")} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </a>
              </div>


              <div className="table-cell px-10" id="email">
                {/* Email */}
                <a href="mailto:cindyqian.yushi@gmail.com" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>



              <div className="table-cell px-10" id="linkedin">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/cindyqiann/" target="_blank">
                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 448 512">
                      {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                      <path
                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
        {/* </div> */}









      </main>
    </div>
  );
}

export default HomePage;
