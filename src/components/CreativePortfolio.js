// import logo from '../logo.svg';
import './CreativePortfolio.css';
import { ColorfulLink } from './ColorfulLink.js';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';






function CreativePortfolio() {






  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-20 gap-16 font-[family-name:var(--font-geist-sans)]">
    // <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen gap-16 geist-mono">

    <main className="w-full gap-8 sm:items-start">

      {/* <div className="w-1/2 h-5/6 top-0 left-0 absolute -z-10" id="topBanner">

      </div> */}
      {/* 
      <div className="table-fixed">



      </div> */}

      <div className="w-full pl-52 fixed mt-80 z-50" >
        <div className="w-full border-spacing-10" >
          <h1 className="text-6xl text-left mb-10 geist-mono left-4" id="cindyqian">

            {/* <Link style={{ textDecoration: "none" }} className="text-6xl geist-mono
            bg-gradient-to-r bg-clip-text text-transparent 
            from-neutral-950 via-rose-400 to-rose-200
            animate-text hover:text-rose-400" to="/">Cindy Qian</Link> */}
            <Link style={{ textDecoration: "none" }} className="text-6xl geist-mono text-rose-400 hover:text-rose-500" to="/">Cindy Qian</Link>
          </h1>
        </div>


        <div id="mainText" className="w-1/3 fixed top-0 self-center relative">
          <p className="text-sm text-left geist-mono inline">
            I'm a
            <ColorfulLink textType="creative" link="https://www.instagram.com/bycindyq/" text=" photographer "></ColorfulLink>
            + creative! I love love things that evoke emotion and help us feel more connected to the world.
            &nbsp;
            <br></br><br></br>
            Whether it be planning an event, doing a photoshoot, or , I am passionate about helping people feel closer
            to the world &#127757; around them and greatly value the importance of driving the vision, intention, and impact of everything I create.
            <br></br><br></br>
            I'm still developing this site, come back later for more!
            {/* I do event, portrait, and concept photoshoots, compose self portraits, and */}
          </p>
        </div>

      </div>



      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 absolute -z-50">
        <div className="grid gap-4">
        </div>

        <div className="grid gap-4">
        </div>

        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/flowerearring1.JPG")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/sittingoncourt.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/kellylaraspin.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/estherallierun1.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/quadtree2.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/chelseabacklitsuzz.jpg")} alt="" />
          </div>

          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/amandacrewwhispering.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/laracloseupcap.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/peterlassen.JPG")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/laranick1.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/cynthiakevinsteps.jpg")} alt="" />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/flowercommuntiybuilding.JPG")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/flowerhand.JPG")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/pastagrouppic.JPG")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/magnolia.JPG")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/walkingrainbowfoster.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/cynthiakevinbacklit.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/amypurple.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/blueflowers.JPG")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/lassen4hikers.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/kevinsitting.jpg")} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/amandagradrunning.jpg")} alt="" />
          </div>
        </div>

      </div>






      <div className="w-1/3 fixed w-full self-center table-fixed border-spacing-10" >
        <div className="table-row">

          <div className="table-cell px-10" id="resume">
            {/* Resume */}
            <a href={require("../assets/CindyQianResume.pdf")} target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </a>
          </div>


          <div className="table-cell px-10" id="email">
            {/* Email */}
            <a href="mailto:cindyqian.yushi@gmail.com" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>



          <div className="table-cell px-10" id="linkedin">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/cindyqiann/" target="_blank">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
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

          <div className="table-cell px-10" id="instagram">
            {/* Instagram */}
            <a href="https://www.instagram.com/cindyqiann/" target="_blank">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 448 512">
                  {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>







    </main>
    // </div>
  );
}

export default CreativePortfolio;
