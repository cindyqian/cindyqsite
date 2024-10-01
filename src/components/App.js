// import logo from '../logo.svg';
import './App.css';
import { ColorfulLink } from './ColorfulLink.js';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { Parallax } from 'react-scroll-parallax';

import { useRef, useEffect, useState } from 'react';
// import { AreImagesVisible } from './ImageStatus.js';
// import Measure from 'react-measure'







function App() {



  
  

  
  // indicates whether image is visible on the screne    
  // const imagesOnScreen = new Set();
  
  const textOnScreen = new Set(["cindyqian", "intro", "graduation", "internships", "dubhacks", "mlh", "photography", "pokemon", "boulder", "content", "rest", "resume", "email", "linkedin", "instagram"]);
  // const imagesAboveTop = new Set();
  // const textOnScreen = Intro;

  // indicates what text should appear for each image
  const imageTextRelationship = new Map();
    imageTextRelationship.set("graduationImages", ["graduation"]);
    imageTextRelationship.set("internshipsImages", ["internships"]);
    imageTextRelationship.set("dubhacksImages", ["dubhacks"]);
    imageTextRelationship.set("mlhImages", ["mlh"]);
    imageTextRelationship.set("photographyImages", ["photography"]);
    imageTextRelationship.set("pokemonImages", ["pokemon"]);
    imageTextRelationship.set("boulderImages", ["boulder"]);
    imageTextRelationship.set("contentImages", ["content", "instagram"]);

  // do i need this????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
  const textImageRelationship = new Map();
    textImageRelationship.set("graduation", "graduationImages");
    textImageRelationship.set("internships", "internshipsImages");
    textImageRelationship.set("dubhacks", "dubhacksImages");
    textImageRelationship.set("mlh", "mlhImages");
    textImageRelationship.set("pokemon", "pokemonImages");
    textImageRelationship.set("boulder", "boulderImages");
    textImageRelationship.set("content", "contentImages");
    textImageRelationship.set("instagram", "contentImages");
    // imageTextRelationship.set("thirdImage", "genie");

  window.onscroll = function() {
    checkImageVisibility()
  };
  

  // this updates imagesOnScreen to track which images are on screen out of all the possible images
  const checkImageVisibility = () => {
    const currImageFocus = new Set();
    for ( let [image, text] of imageTextRelationship) {
      const currImage = document.getElementById(image);
      const topBorderOfImage = currImage.getBoundingClientRect().top;
      const bottomBorderOfImage = currImage.getBoundingClientRect().bottom;
      // if image is in the viewport
      if (topBorderOfImage < window.innerHeight && bottomBorderOfImage > 0) {
        if (!currImageFocus.has(currImage.id)) {
          currImageFocus.clear();
          currImageFocus.add(currImage.id);
        }
      // if image has gone over the top
      }
      else if (bottomBorderOfImage < 0) {
        currImageFocus.delete(currImage.id);
        // imagesAboveTop.add(currImage.id)
      }
      
    }
    updateText(currImageFocus);
  }

  const sayHi = () => {
    console.log("hi collin")
  }

  // based on what is on screen, append respective text
  const updateText = (currImageFocus) => {
    for (let text of textOnScreen) {
      document.getElementById(text).style.opacity = "0.3";
    }
    
    let currTextFocus = new Set();
    if (currImageFocus.size == 0) {
      textOnScreen.forEach(item => currTextFocus.add(item))
    } else {
      for (let image of currImageFocus) {
        imageTextRelationship.get(image).forEach(item => currTextFocus.add(item))
        // currTextFocus.add(imageTextRelationship.get(image));
      }
      
    }

    for (let text of currTextFocus) {
      document.getElementById(text).style.opacity = "1";
      // if (text == "instagram") {
      //   document.getElementById(text).fill = "#eab308 hover:#ca8a04";
      // }
      // document.getElementById(text).classList.add = "z-index-100";
    }    
  }




  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-20 gap-16 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

            <div id="mainText" className="w-1/3 fixed top-0 self-center my-40 my-24 z-50">
              <h1 className="text-xl text-center mb-7 font-[family-name:var(--font-geist-mono)]" id="cindyqian" onClick={sayHi}>
                  Cindy Qian
              </h1>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline" id="intro">
                Hello, I'm Cindy! I’m passionate about building products and experiences that empower people
                to express themselves in creative and meaningful ways. My creativity thrives
                when I’m helping others bring their ideas to life!

                <br></br><br></br>
              </p>
              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="graduation">
                I recently graduated from the University of Washington with a degree in
                <ColorfulLink link="https://ischool.uw.edu/programs/informatics" text=" Informatics"></ColorfulLink>
                .&nbsp;
              </p>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="internships">
                I’ve had the chance to work on a range of exciting projects---from developing an IoT mobile app for
                tracking construction machinery data at 
                <ColorfulLink link="https://breadware.com" text=" Breadware "></ColorfulLink>
                to implementing new information systems for the ecommerce operations team at
                <ColorfulLink link="https://www.genielift.com" text=" Genie "></ColorfulLink>
                to identifying a high-level product vision and roadmap for
                <ColorfulLink link="https://www.thoughtfulgpt.com" text=" ThoughtfulGPT "></ColorfulLink>
                to designing a custom point of sale system for
                <ColorfulLink link="https://ischool.uw.edu/capstone/projects/2024/grand-pere-wholesale-bakery-order-management-system" text=" Grand Père Bakery"></ColorfulLink>
                .&nbsp;
              </p>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="dubhacks">
                I used to organize the largest hackathon in the PNW,
                <ColorfulLink link="https://dubhacks.co" text=" DubHacks"></ColorfulLink>
                , at the University of Washington&nbsp;
              </p>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="mlh">
                and work as a
                <ColorfulLink link="https://mlh.io/coaches" text=" hackathon coach "></ColorfulLink>
                at
                <ColorfulLink link="https://mlh.io" text=" Major League Hacking"></ColorfulLink>
                !&nbsp;
              </p>
              
              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="photography">
                On the side, I run my own 
                <ColorfulLink link="https://www.instagram.com/bycindyq/" text=" small photography business"></ColorfulLink>
              </p>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="pokemon">
                ,
                avidly play pokemon go (I started in 2023 & am at lv. 41, add me 5772 7964 6941)
              </p>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="boulder">
                ,
                <ColorfulLink link="https://www.instagram.com/wafflehour_/" text=" boulder"></ColorfulLink>
              </p>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="content">
                , and
                <ColorfulLink link="https://www.instagram.com/wafflehour_/" text=" create content :)"></ColorfulLink>
                <br></br><br></br>
              </p>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="rest">
                While I’m still figuring out the path that fits me best, I’m seeking opportunities
                that will let me hone my product/product marketing management skills, collaborate with inspiring teams, and keep
                learning along the way.

                <br></br><br></br>

                Welcome! Take a look around :)
              </p>



              {/* <div className="table w-full table-fixed border-spacing-10 border-spacing-y-96" >
              <div className="table-row " id="graduationImages">

                <div className="table-cell w-4/12"></div> */}
              <div className="table w-full table-fixed border-spacing-10" >
                <div className="table-row">
                  <div className="table-cell" id="resume">
                    {/* Resume */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>

                  <div className="table-cell" id="email">
                    {/* Email */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>

                  <div className="table-cell" id="linkedin">
                    {/* LinkedIn */}
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
                  </div>

                  <div className="table-cell" id="instagram">
                    {/* Instagram */}
                    <span class="[&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 448 512">
                        {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}





          <Parallax speed={50} className="mx-16 mt-[20%] mt-98 pt-48">
            <div className="table w-full table-fixed border-spacing-10 border-spacing-y-96" >
              <div className="table-row " id="graduationImages">

                <div className="table-cell w-4/12">
                  <img
                  src={require("../images/gradjump.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell w-6/12">
                </div>
                <div className="table-cell w-4/12">
                  <img
                    src={require("../images/triograd.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
                </div>
              </div>

              <div className="table-row " id="internshipsImages">

                <div className="table-cell">
                  <img
                  src={require("../images/genienametag.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell">
                </div>
                <div className="table-cell">
                  <img
                    src={require("../images/geniedrilling.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
                </div>
                
              </div>

              <div className="table-row " id="dubhacksImages">
                <div className="table-cell">
                  <img
                  src={require("../images/dhselfie.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell">
                </div>
                <div className="table-cell">
                  <img
                    src={require("../images/iorganizedsticker.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
                </div>
              </div>

              <div className="table-row " id="mlhImages">
                <div className="table-cell">
                  <img
                  src={require("../images/tt1.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell">
                </div>
                <div className="table-cell">
                  <img
                    src={require("../images/tt7.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
                </div>
              </div>


              <div className="table-row " id="photographyImages">
                <div className="table-cell">
                  <img
                  src={require("../images/pillars.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell">
                </div>
                <div className="table-cell">
                  <img
                    src={require("../images/canon100.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
                </div>
              </div>

              <div className="table-row " id="pokemonImages">
                <div className="table-cell">
                  <img
                  src={require("../images/pogo1.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell">
                </div>
                <div className="table-cell">
                  <img
                    src={require("../images/pogo2.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
                </div>
              </div>

              <div className="table-row " id="boulderImages">
                <div className="table-cell">
                  <img
                  src={require("../images/pinkclimb.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell">
                </div>
                <div className="table-cell">
                  <img
                    src={require("../images/magikarp.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
                </div>
              </div>

              <div className="table-row " id="contentImages">
                <div className="table-cell">
                  <img
                  src={require("../images/selfiecindy.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell">
                </div>
                <div className="table-cell">
                  <img
                    src={require("../images/squatwaterfallcindy.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
                </div>
              </div>


            </div>
          </Parallax>






        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>
  );
}

export default App;
