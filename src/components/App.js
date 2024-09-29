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



  
  

  


  window.onscroll = function() {
    checkImageVisibility()
  };
  
  // const [imagesOnScreen, updateImagesOnScreen] = useState(new Set([]));    
  const imagesOnScreen = new Set([]);

  const checkImageVisibility = () => {
    const images = ["firstImage", "secondImage"];
    for (let i = 0; i < images.length; i++) {
      const currImage = document.getElementById(images[i]);
      const topBorderOfImage = currImage.getBoundingClientRect().top;
      if (topBorderOfImage < window.innerHeight) {
        imagesOnScreen.add(currImage);
      }
      
    }
    console.log(imagesOnScreen)
  }

  const [textOnScreen, updateTextOnScreen] = useState(new Set([])); 


  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-20 gap-16 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <div className="w-1/3 fixed top-0 self-center my-40">
            <h1 className="text-xl text-center m-7 font-[family-name:var(--font-geist-mono)]">
                Cindy Qian
            </h1>

            <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase" >
              Hello, I'm Cindy! I’m passionate about building products and experiences that empower people
              to express themselves in creative and meaningful ways. My creativity thrives
              when I’m helping others bring their ideas to life!

              <br></br><br></br>

              I recently graduated from the University of Washington with a degree in
              <ColorfulLink link="https://ischool.uw.edu/programs/informatics" text=" Informatics"></ColorfulLink>
              . I’ve had the chance to work on a range of exciting projects---from developing an IoT mobile app for
              tracking construction machinery data at 
              <ColorfulLink link="https://breadware.com" text=" Breadware "></ColorfulLink>
              to implementing new information systems for the ecommerce operations team at
              <ColorfulLink link="https://www.genielift.com" text=" Genie "></ColorfulLink>
              to identifying a high-level product vision and roadmap for
              <ColorfulLink link="https://www.thoughtfulgpt.com" text=" ThoughtfulGPT "></ColorfulLink>
              to designing a custom point of sale system for
              <ColorfulLink link="https://ischool.uw.edu/capstone/projects/2024/grand-pere-wholesale-bakery-order-management-system" text=" Grand Père Bakery"></ColorfulLink>
              .
              
              I used to organize 
              <ColorfulLink link="https://dubhacks.co" text=" DubHacks "></ColorfulLink>
              at the University of Washington and work as a
              <ColorfulLink link="https://mlh.io/coaches" text=" hackathon coach "></ColorfulLink>
              at
              <ColorfulLink link="https://mlh.io" text=" Major League Hacking"></ColorfulLink>
              ! On the side, I run my own 
              <ColorfulLink link="https://www.instagram.com/bycindyq/" text=" small photography business"></ColorfulLink>
              ,
              avidly play pokemon go (I started in 2023 & am at lv. 41, add me 5772 7964 6941), 
              <ColorfulLink link="https://www.instagram.com/wafflehour_/" text=" boulder"></ColorfulLink>
              , and plan small dinner parties :)
              <br></br><br></br>

              
              While I’m still figuring out the path that fits me best, I’m seeking opportunities
              that will let me hone my product/project management skills, collaborate with inspiring teams, and keep
              learning along the way.

              <br></br><br></br>

              Welcome! Take a look around :)
            </p>
          </div>

          <Parallax speed={50} className="mx-16 mt-[20%] mt-98 pt-48">
            <div className="table w-full table-fixed border-spacing-5" >
              {/* ref={ref}> */}
              <div className="table-row" id="firstImage">
                <div className="table-cell w-2/12">
                </div>
                <div className="table-cell w-1/12">
                  <img
                  src={require("../images/gradcindy.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell w-2/12">
                </div>
                <div className="table-cell">
                </div>
                <div className="table-cell w-1/12">
                </div>
                <div className="table-cell w-1/12">
                </div>
                <div className="table-cell w-1/12">
                </div>
              </div>


              <div className="table-row" id="secondImage">
                <div className="table-cell w-2/12">
                </div>
                <div className="table-cell w-1/12">
                  <img
                  src={require("../images/gradcindy.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell w-2/12">
                </div>
                <div className="table-cell">
                </div>
                <div className="table-cell w-1/12">
                </div>
                <div className="table-cell w-1/12">
                </div>
                <div className="table-cell w-1/12">
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
