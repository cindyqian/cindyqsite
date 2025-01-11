// import logo from '../logo.svg';
import './TechnicalPortfolio.css';
import { ColorfulLink } from './ColorfulLink.js';
import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import { useRef, useEffect, useState } from 'react';


import { Link } from 'react-router-dom';

// import OpenAI from "openai";


function TechnicalPortfolio() {





  // const openai = new OpenAI();

  // const completion = await openai.chat.completions.create({
  //     model: "gpt-4o-mini",
  //     messages: [
  //         { role: "system", content: "You are a helpful assistant." },
  //         {
  //             role: "user",
  //             content: "Write a haiku about recursion in programming.",
  //         },
  //     ],
  // });

  // console.log(completion.choices[0].message);




  let specialColor = "text-yellow-500 hover:text-yellow-600";


  const textOnScreen = new Set(["cindyqian", "graduation", "internships", "dubhacks", "mlh", "photography", "pokemon", "boulder", "content", "rest", "resume", "email", "linkedin"]);

  const imageTextRelationship = new Map();
  imageTextRelationship.set("graduationImages", ["graduation"]);
  imageTextRelationship.set("internshipsImages", ["internships"]);
  imageTextRelationship.set("dubhacksImages", ["dubhacks"]);
  imageTextRelationship.set("mlhImages", ["mlh"]);
  imageTextRelationship.set("photographyImages", ["photography"]);
  imageTextRelationship.set("pokemonImages", ["pokemon"]);
  imageTextRelationship.set("boulderImages", ["boulder"]);
  imageTextRelationship.set("contentImages", ["content"]);

  // do i need this????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
  const textImageRelationship = new Map();
  textImageRelationship.set("graduation", "graduationImages");
  textImageRelationship.set("internships", "internshipsImages");
  textImageRelationship.set("dubhacks", "dubhacksImages");
  textImageRelationship.set("mlh", "mlhImages");
  textImageRelationship.set("photography", "photographyImages");
  textImageRelationship.set("pokemon", "pokemonImages");
  textImageRelationship.set("boulder", "boulderImages");
  textImageRelationship.set("content", "contentImages");
  // imageTextRelationship.set("thirdImage", "genie");

  window.onscroll = function () {
    checkImageVisibility()
  };

  // window.onbeforeunload = function (event) {
  //   window.scrollTo(0, 0);
  // }


  // this updates imagesOnScreen to track which images are on screen out of all the possible images
  const checkImageVisibility = () => {
    const currImageFocus = new Set();
    for (let [image, text] of imageTextRelationship) {
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

        <div id="mainText" className="w-1/3 fixed top-5 self-center my-32 z-50">

          <h1 className="text-xl text-center mb-10 geist-mono" id="cindyqian" onClick={sayHi}>
            <Link style={{ textDecoration: "none" }} className="font-medium text-yellow-500 hover:text-yellow-600" to="/">Cindy Qian</Link>
          </h1>


          <p className="text-sm text-left geist-mono inline " id="graduation">
            I'm a University of Washington graduate with a degree in
                <ColorfulLink textColor={specialColor} link="https://ischool.uw.edu/programs/informatics" text=" Informatics"></ColorfulLink>
                .
                This site was developed with React, scroll to take a look around :)
                <br></br><br></br>
          </p>

          <p className="text-sm text-left geist-mono inline " id="internships">
            Over the past few years, I’ve had the chance to work on a range of exciting projects---from developing an IoT mobile app for
            tracking construction machinery data at
                <ColorfulLink textColor={specialColor} link="https://breadware.com" text=" Breadware "></ColorfulLink>
                to implementing new information systems for the ecommerce operations team at
                <ColorfulLink textColor={specialColor} link="https://www.genielift.com" text=" Genie "></ColorfulLink>
                to identifying a high-level product vision and roadmap for
                <ColorfulLink textColor={specialColor} link="https://www.thoughtfulgpt.com" text=" ThoughtfulGPT "></ColorfulLink>
                to designing a custom point of sale system for
                <ColorfulLink textColor={specialColor} link="https://ischool.uw.edu/capstone/projects/2024/grand-pere-wholesale-bakery-order-management-system" text=" Grand Père Bakery"></ColorfulLink>
                .&nbsp;
              </p>

          <p className="text-sm text-left geist-mono inline " id="dubhacks">
            I used to coordinate logistics and marketing for the largest hackathon in the PNW,
                <ColorfulLink textColor={specialColor} link="https://dubhacks.co" text=" DubHacks"></ColorfulLink>
                , at the University of Washington&nbsp;
              </p>

          <p className="text-sm text-left geist-mono inline " id="mlh">
            and work as a
                <ColorfulLink textColor={specialColor} link="https://mlh.io/coaches" text=" hackathon coach "></ColorfulLink>
                at
                <ColorfulLink textColor={specialColor} link="https://mlh.io" text=" Major League Hacking"></ColorfulLink>
                !&nbsp;
              </p>

          <p className="text-sm text-left geist-mono inline " id="photography">
            On the side, I run my own
                <ColorfulLink textColor={specialColor} link="https://www.instagram.com/bycindyq/" text=" small photography business"></ColorfulLink>
          </p>

          <p className="text-sm text-left geist-mono inline " id="pokemon">
            ,
            avidly play pokemon go and pokemon pocket
              </p>

          <p className="text-sm text-left geist-mono inline " id="boulder">
            ,
                <ColorfulLink textColor={specialColor} link="https://www.instagram.com/wafflehour_/" text=" boulder"></ColorfulLink>
          </p>

          <p className="text-sm text-left geist-mono inline " id="content">
            , and
                <ColorfulLink textColor={specialColor} link="https://www.goodreads.com/user/show/175062130-cindy-qian" text=" read"></ColorfulLink>
                .
                <br></br><br></br>
            {/* <ColorfulLink textColor={specialColor} link="https://www.instagram.com/cindyqiann/" text=" document my life online :)"></ColorfulLink>
                <br></br><br></br> */}
          </p>

          <p className="text-sm text-left geist-mono inline " id="rest">
            I’m currently seeking opportunities
            that will let me hone my product management, marketing, and project management skills.

            <br></br><br></br>

            &#128188;: Java, HTML, CSS, Javascript, React.js, R, SQL, Microsoft Suite,
            Azure DevOps, Jira, Figma, Miro, Adobe Photoshop & Lightroom, Wordpress,
            Canva, Contentful, Asana, and some HubSpot

            <br></br><br></br>

            {/* Welcome! Take a look around :) */}
          </p>



          {/* <div className="table w-full table-fixed border-spacing-10 border-spacing-y-96" >
              <div className="table-row " id="graduationImages">

                <div className="table-cell w-4/12"></div> */}
          <div className="table w-full table-fixed border-spacing-x-10 " >
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

            </div>
          </div>
        </div>
        {/* </div> */}




        <ParallaxProvider>
          <Parallax speed={50} className="mx-16 mt-[20%] mt-64 pt-48">
            <div className="w-full table-fixed border-spacing-y-96">
              <div className="table-row" id="graduationImages">

                <div className="table-cell align-middle w-3/12" style={{ borderBottomWidth: "0 !important" }}>
                  <img
                    loading="eager"
                    src={require("../images/technical/gradjump.png")}
                    alt="jumping with her graduation cap in one hand and a bouquet of flowers in another" />
                </div>
                <div className="table-cell align-middle w-6/12">
                </div>
                <div className="table-cell align-middle w-3/12">
                  <img
                    loading="eager"
                    src={require("../images/technical/triograd.png")}
                    alt="Cindy Qian with two friends at graduation" />
                </div>
              </div>

              <div className="table-row " id="internshipsImages">

                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/genienametag.png")}
                    alt="Cindy Qian's name tag at the Genie office" />
                </div>
                <div className="table-cell align-middle">
                </div>
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/geniedrilling.png")}
                    alt="Cindy Qian drilling a vehicle wheel in PPE" />
                </div>

              </div>

              <div className="table-row " id="dubhacksImages">
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/dhselfie.png")}
                    alt="Selfie of Cindy Qian and 2 other DubHacks hackathon organizers" />
                </div>
                <div className="table-cell align-middle">
                </div>
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/iorganizedsticker.png")}
                    alt="Cindy Qian holding an I Organized sticker from Major League Hacking, is given to hackathon organizers" />
                </div>
              </div>

              <div className="table-row " id="mlhImages">
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/tt1.png")}
                    alt="Cindy Qian presenting on stage for Major League Hacking" />
                </div>
                <div className="table-cell align-middle">
                </div>
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/tt7.png")}
                    alt="Cindy Qian handing out prizes to a hackathon participant" />
                </div>
              </div>


              <div className="table-row " id="photographyImages">
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/pillars.png")}
                    alt="Cindy Qian taking graduation photos for 2 girls at the University of Washington value pillars" />
                </div>
                <div className="table-cell align-middle">
                </div>
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/canon100.png")}
                    alt="Cindy Qian holding a Canon Powershot 100" />
                </div>
              </div>

              <div className="table-row " id="pokemonImages">
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/pogo1.png")}
                    alt="4 screenshots of Cindy Qian's most prized Pokemon Go catches" />
                </div>
                <div className="table-cell align-middle">
                </div>
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/pocket.jpg")}
                    alt="4 screenshots of Cindy Qian's most prized Pokemon Go catches" />
                </div>
              </div>

              <div className="table-row " id="boulderImages">
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/pinkclimb.png")}
                    alt="Cindy Qian bouldering up a wall" />
                </div>
                <div className="table-cell align-middle">
                </div>
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/magikarp.png")}
                    alt="Cindy Qian kissing her Magikarp shaped bouldering chalk bag" />
                </div>
              </div>

              <div className="table-row " id="contentImages">
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/gasbill.png")}
                    alt="Cindy Qian taking a selfie" />
                </div>
                <div className="table-cell align-middle">
                </div>
                <div className="table-cell align-middle">
                  <img
                    loading="eager"
                    src={require("../images/technical/teacomic.png")}
                    alt="Cindy Qian squatting" />
                </div>
              </div>


            </div>
          </Parallax>
        </ParallaxProvider>






      </main>
    </div>
  );
}

export default TechnicalPortfolio;
