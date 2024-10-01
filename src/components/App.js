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
  const currImageFocus = new Set();//["cindyqian", "intro"]);
  const textOnScreen = new Set(["cindyqian", "intro", "graduation", "internships", "hackathon", "rest"]);
  // const imagesAboveTop = new Set();
  // const textOnScreen = Intro;

  // indicates what text should appear for each image
  const imageTextRelationship = new Map();
    imageTextRelationship.set("graduationImages", "graduation");
    imageTextRelationship.set("internshipsImages", "internships");
    imageTextRelationship.set("hackathonImages", "hackathon");

  const textImageRelationship = new Map();
    textImageRelationship.set("graduation", "graduationImages");
    textImageRelationship.set("internships", "internshipsImages");
    // imageTextRelationship.set("thirdImage", "genie");

  window.onscroll = function() {
    checkImageVisibility()
  };
  

  // this updates imagesOnScreen to track which images are on screen out of all the possible images
  const checkImageVisibility = () => {
    for ( let [image, text] of imageTextRelationship) {
      const currImage = document.getElementById(image);
      const topBorderOfImage = currImage.getBoundingClientRect().top;
      const bottomBorderOfImage = currImage.getBoundingClientRect().bottom;
      // if image is in the viewport
      if (topBorderOfImage < window.innerHeight && bottomBorderOfImage > 0) {
        // if (!imagesOnScreen.has(currImage.id)) {
        //   imagesOnScreen.add(currImage.id);
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
    // updates text accordingly
    // console.log(imagesOnScreen)
    updateText();
  }

  // based on what is on screen, append respective text
  const updateText = () => {
    // if (currImageFocus.length == 0) {

    // }
    // add text if image is on screen but text isn't
    
    // for (let image of currImageFocus) {// imagesOnScreen) {
      // console.log("image: " + image)
      // if (!textOnScreen.has(imageTextRelationship.get(image))) {
        // currId = the text we want to grab
        // let currId = imageTextRelationship.get(image);
        // let currTextFocus = imageTextRelationship.get(image)
        // document.getElementById(currId).classList.remove("invisible");
        // document.getElementById(currId).classList.add('visible');
        // textOnScreen.add(imageTextRelationship.get(image));
        // console.log("here")
        // first make all transparent
        for (let text of textOnScreen) {
          // console.log("curr test text: " + text + ", " + currId)
          // if (text != currTextFocus) {
            // console.log("not the curr text: " + text)
            document.getElementById(text).style.opacity = "0.3";
          // }
        // }
        }


      // }
    
    let currTextFocus = new Set();
    if (currImageFocus.size == 0) {
      textOnScreen.forEach(item => currTextFocus.add(item))
    } else {
      for (let image of currImageFocus) {
        currTextFocus.add(imageTextRelationship.get(image));
      }
      
    }
    console.log("curr text to show: " + currTextFocus.size)
    // for (let image of currImageFocus) {// imagesOnScreen) {
    // for (let text of currTextFocus) {
      // console.log("image: " + image)
      // if (!textOnScreen.has(imageTextRelationship.get(image))) {
        // currId = the text we want to grab
        // let currId = imageTextRelationship.get(image);
        //////// currTextFocus = imageTextRelationship.get(image)
        // document.getElementById(currId).classList.remove("invisible");
        // document.getElementById(currId).classList.add('visible');
        // textOnScreen.add(imageTextRelationship.get(image));
        // console.log("here")

        for (let text of currTextFocus) {

          // console.log("curr test text: " + text + ", " + currId)
          // if (text == text) {
            // console.log("highlighting this imahe's text: " + image)
            document.getElementById(text).style.opacity = "1";
          // }
        // }
      // }
    }
    

    // for (let text of textOnScreen) {
    //   // if the image is no longer on the screen, but text is
    //   if (!imagesOnScreen.has(textImageRelationship.get(text))) {

    //   }
    // }
  }




  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-20 gap-16 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

            <div className="w-1/3 fixed top-0 self-center my-40 my-24">
              <h1 className="text-xl text-center mb-7 font-[family-name:var(--font-geist-mono)]" id="cindyqian">
                  Cindy Qian
              </h1>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase" id="intro">
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
                .
              </p>

              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="hackathon">
                I used to organize 
                <ColorfulLink link="https://dubhacks.co" text=" DubHacks "></ColorfulLink>
                at the University of Washington and work as a
                <ColorfulLink link="https://mlh.io/coaches" text=" hackathon coach "></ColorfulLink>
                at
                <ColorfulLink link="https://mlh.io" text=" Major League Hacking"></ColorfulLink>
                !&nbsp;
              </p>
              
              <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] lowercase inline " id="rest">
                On the side, I run my own 
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
            <div className="table w-full table-fixed border-spacing-10 border-spacing-y-96" >
              <div className="table-row " id="graduationImages">
                <div className="table-cell w-1/12">
                </div>
                <div className="table-cell w-4/12">
                  <img
                  src={require("../images/gradjump.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell w-6/12">
                </div>
                <div className="table-cell w-6/12">
                </div>
                <div className="table-cell w-4/12">
                  <img
                    src={require("../images/triograd.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
                </div>
                <div className="table-cell w-1/12">
                </div>
              </div>

              <div className="table-row " id="internshipsImages">
                <div className="table-cell w-1/12">
                </div>
                <div className="table-cell w-4/12">
                  <img
                  src={require("../images/genienametag.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell w-6/12">
                </div>
                <div className="table-cell w-6/12">
                </div>
                <div className="table-cell w-4/12">
                  <img
                    src={require("../images/geniedrilling.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
                </div>
                <div className="table-cell w-1/12">
                </div>
              </div>

              <div className="table-row " id="hackathonImages">
                <div className="table-cell w-1/12">
                </div>
                <div className="table-cell w-4/12">
                  <img
                  src={require("../images/genienametag.png")}
                  alt="Picture of Cindy Qian" />
                </div>
                <div className="table-cell w-6/12">
                </div>
                <div className="table-cell w-6/12">
                </div>
                <div className="table-cell w-4/12">
                  <img
                    src={require("../images/geniedrilling.png")}
                    alt="Picture of Cindy Qian and 2 friends" />
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
