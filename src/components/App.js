// import logo from '../logo.svg';
import './App.css';
import { ColorfulLink } from './ColorfulLink.js';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { Parallax } from 'react-scroll-parallax';

import { useRef, useEffect, useState } from 'react';
// import { AreImagesVisible } from './ImageStatus.js';
// import Measure from 'react-measure'
import { Intro } from './Intro.js';







function App() {



  
  

  


  window.onscroll = function() {
    checkImageVisibility()
  };
  
  // const [imagesOnScreen, updateImagesOnScreen] = useState(new Set([]));    
  const imagesOnScreen = new Map();
  // const textOnScreen = Intro;

  const checkImageVisibility = () => {
    // checking which images are on screen out of all the possible images
    const images = ["gradphoto", "secondImage"];
    for (let i = 0; i < images.length; i++) {
      const currImage = document.getElementById(images[i]);
      const topBorderOfImage = currImage.getBoundingClientRect().top;
      if (topBorderOfImage < window.innerHeight) {
        if (!imagesOnScreen.has(currImage.id)) {
          imagesOnScreen.set(currImage.id, 0);
        }
      }
      
    }
    console.log(imagesOnScreen)
    console.log(imagesOnScreen.get("gradphoto"))
    updateText(imagesOnScreen);
    
  }

  // based on what is on screen, append respective text
  const updateText = () => {
    // for (let j = 0; j < imagesOnScreen.length; j++) {
    //   textOnScreen = Intro;
    //   if (imagesOnScreen[j])

    // }
    // textOnScreen = Intro;
    
    if (imagesOnScreen.has("gradphoto") && imagesOnScreen.get("gradphoto") == 0) {
      document.getElementById("uw").classList.remove("invisible");
      document.getElementById("uw").classList.add('visible');
      imagesOnScreen.set("gradphoto", 1);
    }

    if (imagesOnScreen.has("secondImage") && imagesOnScreen.get("secondImage") == 0) {
      document.getElementById("breadware").classList.remove("invisible");
      document.getElementById("breadware").classList.add('visible');
      imagesOnScreen.set("secondImage", 1);
    }
    

    // while (div.children.length > 0) {
    //   el.appendChild(div.children[0]);
    // }
  


    // if (imagesOnScreen.has("firstImage")) {
      
    // }
  }




  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-20 gap-16 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          {/* <div className="w-1/3 fixed top-0 self-center my-40"> */}
            {/* {textOnScreen} */}
            {/* <Intro id="intro" />
             */}
            <div className="w-1/3 fixed top-0 self-center my-40 my-24">
              <h1 className="text-xl text-center mb-7 font-[family-name:var(--font-geist-mono)]" id="cindyqian">
                  Cindy Qian
              </h1>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase" id="intro">
                Hello, I'm Cindy! I’m passionate about building products and experiences that empower people
                to express themselves in creative and meaningful ways. My creativity thrives
                when I’m helping others bring their ideas to life!

                <br></br><br></br>
              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline invisible" id="uw">
                I recently graduated from the University of Washington with a degree in
                <ColorfulLink link="https://ischool.uw.edu/programs/informatics" text=" Informatics"></ColorfulLink>
                .&nbsp;
              </p> 
              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline invisible" id="breadware">
                I’ve had the chance to work on a range of exciting projects---from developing an IoT mobile app for
                tracking construction machinery data at 
                <ColorfulLink link="https://breadware.com" text=" Breadware "></ColorfulLink>
              </p>
              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline invisible" id="genie">
                to implementing new information systems for the ecommerce operations team at
                <ColorfulLink link="https://www.genielift.com" text=" Genie "></ColorfulLink>
              </p>
              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline invisible" id="tgpt">
                to identifying a high-level product vision and roadmap for
                <ColorfulLink link="https://www.thoughtfulgpt.com" text=" ThoughtfulGPT "></ColorfulLink>
              </p>
              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline invisible" id="grandpere">
                to designing a custom point of sale system for
                <ColorfulLink link="https://ischool.uw.edu/capstone/projects/2024/grand-pere-wholesale-bakery-order-management-system" text=" Grand Père Bakery"></ColorfulLink>
                .
              </p>

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
          {/* </div> */}

          <Parallax speed={50} className="mx-16 mt-[20%] mt-98 pt-48">
            <div className="table w-full table-fixed border-spacing-5" >
              {/* ref={ref}> */}
              <div className="table-row" id="gradphoto">
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
