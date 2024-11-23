// import logo from '../logo.svg';
import './CreativePortfolio.css';
import { ColorfulLink } from './ColorfulLink.js';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';






function CreativePortfolio() {



  const [h1Color, updateh1Color] = useState("text-rose-400 hover:text-rose-500");
  // set default h1 color
  // updateFetchCount("text-rose-400 hover:text-rose-500");

  const imageOnScreen = new Set(["flowerearring", "courtandpasta", "gradgrass", "suzzwarm", "amyflowers", "picnicandsky", "bw"]);

  const imageToColor = new Map();
  imageToColor.set("flowerearring", "text-rose-400 hover:text-rose-500");
  imageToColor.set("flowercommuntiybuilding", "text-rose-400 hover:text-rose-500");
  imageToColor.set("flowerearringcloseup", "text-rose-400 hover:text-rose-500");

  imageToColor.set("pastagrouppic", "text-amber-200 hover:text-amber-300");
  imageToColor.set("sittingoncourt", "text-amber-200 hover:text-amber-300");

  imageToColor.set("walkingrainbowfoster", "text-lime-600 hover:text-lime-700");
  imageToColor.set("quadtree", "text-lime-600 hover:text-lime-700");
  imageToColor.set("kellylaraspin", "text-lime-600 hover:text-lime-700");
  imageToColor.set("estherallierun", "text-lime-600 hover:text-lime-700");

  imageToColor.set("amandacrewwhispering", "text-yellow-600 hover:text-yellow-700");
  imageToColor.set("chelseabacklitsuzz", "text-yellow-600 hover:text-yellow-700");
  imageToColor.set("cynthiakevinbacklit", "text-yellow-600 hover:text-yellow-700");

  imageToColor.set("amypurple", "text-pink-300 hover:text-pink-400");

  imageToColor.set("blueflowers", "text-sky-500 hover:text-sky-600");
  imageToColor.set("lassen4hikers", "text-sky-500 hover:text-sky-600");
  imageToColor.set("peterlassen", "text-sky-500 hover:text-sky-600");
  imageToColor.set("laracloseupcap", "text-sky-500 hover:text-sky-600");

  imageToColor.set("amandagradrunning", "text-neutral-500 hover:text-neutral-600");
  imageToColor.set("kevinsitting", "text-neutral-500 hover:text-neutral-600");
  imageToColor.set("cynthiakevinsteps", "text-neutral-500 hover:text-neutral-600");
  imageToColor.set("laranickbw", "text-neutral-500 hover:text-neutral-600");




  const colorToImageSet = new Map();
  colorToImageSet.set("text-rose-400 hover:text-rose-500", ["flowerearring", "flowercommuntiybuilding", "flowerearringcloseup"]);
  colorToImageSet.set("text-amber-200 hover:text-amber-300", ["pastagrouppic", "sittingoncourt"]);
  colorToImageSet.set("text-lime-600 hover:text-lime-700", ["walkingrainbowfoster", "quadtree", "kellylaraspin", "estherallierun"]);
  colorToImageSet.set("text-yellow-600 hover:text-yellow-700", ["amandacrewwhispering", "chelseabacklitsuzz", "cynthiakevinbacklit"]);
  colorToImageSet.set("text-pink-300 hover:text-pink-400", ["amypurple"]);
  colorToImageSet.set("text-sky-500 hover:text-sky-600", ["blueflowers", "lassen4hikers", "peterlassen", "laracloseupcap"]);
  colorToImageSet.set("text-neutral-500 hover:text-neutral-600", ["amandagradrunning", "kevinsitting", "cynthiakevinsteps", "laranickbw"]);


  const currImagesOnScreen = new Set()

  window.onscroll = function () {
    handleScroll()
  };

  const handleScroll = async () => {
    if (
      window.location.href.includes('CreativePortfolio') &&
      window.innerHeight + Math.ceil(window.scrollY) >=
      document.body.offsetHeight + 80
    ) {
      await checkImageVisibility();
    }
  };

  const checkImageVisibility = () => {

    for (let [image, color] of imageToColor) {
      const currImage = document.getElementById(image);
      const topBorderOfImage = currImage.getBoundingClientRect().top;
      const bottomBorderOfImage = currImage.getBoundingClientRect().bottom;
      // if image is in the viewport
      if (topBorderOfImage < window.innerHeight && bottomBorderOfImage > 0) {
        console.log("images on screen: " + currImagesOnScreen.size)
        if (!currImagesOnScreen.has(currImage)) {
          // currImagesOnScreen.clear();
          currImagesOnScreen.add(currImage.id);
        }
      }
      // if image has exited the viewport
      else if (bottomBorderOfImage < 0) {
        currImagesOnScreen.delete(currImage.id);
      }
      else if (topBorderOfImage > window.innerHeight) {
        currImagesOnScreen.delete(currImage.id);
      }

    }


    // check color w max num of images and use that color, doesnt really matter if im clearing above???
    const numOfEachColor = new Map();
    for (let image of currImagesOnScreen) {
      let color = imageToColor.get(image);
      if (!numOfEachColor.has(color)) {
        numOfEachColor.set(color, 1);
      } else {
        numOfEachColor.set(color, numOfEachColor.get(color) + 1);
      }
    }



    let maxNum = 0;
    let maxColor = "na";
    for (let [color, number] of numOfEachColor) {
      if (number > maxNum) {
        maxNum = number;
        maxColor = color;
      }
    }


    // update color used for h1, usestate auto updates
    updateh1Color(maxColor);
  }




  return (
    <main className="w-full gap-8 sm:items-start">

      <div className="w-full pl-52 fixed mt-72 pt-2 z-50" >
        <div className="w-full border-spacing-10" >
          <h1 className="text-6xl text-left mb-10 geist-mono left-4" id="cindyqian">

            {/* <Link style={{ textDecoration: "none" }} className="text-6xl geist-mono
            bg-gradient-to-r bg-clip-text text-transparent 
            from-neutral-950 via-rose-400 to-rose-200
            animate-text hover:text-rose-400" to="/">Cindy Qian</Link> */}
            <Link style={{ textDecoration: "none" }} className={`text-6xl geist-mono ${h1Color}`} to="/">Cindy Qian</Link>
          </h1>
        </div>


        <div id="mainText" className="w-1/3 fixed top-0 self-center relative">
          <p className="text-sm text-left geist-mono inline">
            I'm a
            <ColorfulLink textColor={h1Color} link="https://www.instagram.com/bycindyq/" text=" photographer "></ColorfulLink>
            + creative! I love making things that evoke emotion and help us feel more connected to the &#127757;!
            &nbsp;
            <br></br><br></br>
            Whether it be helping others celebrate milestones, taking conceptual self portraits, or capturing
            the mundane of every day life, I am passionate about driving about the vision, intention, and impact of everything I create.
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
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/flowerearring1.JPG")} alt="" id="flowerearring" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/sittingoncourt.jpg")} alt="" id="sittingoncourt" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/kellylaraspin.jpg")} alt="" id="kellylaraspin" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/estherallierun1.jpg")} alt="" id="estherallierun" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/quadtree2.jpg")} alt="" id="quadtree" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/chelseabacklitsuzz.jpg")} alt="" id="chelseabacklitsuzz" />
          </div>

          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/amandacrewwhispering.jpg")} alt="" id="amandacrewwhispering" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/laracloseupcap.jpg")} alt="" id="laracloseupcap" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/peterlassen.JPG")} alt="" id="peterlassen" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/climbing.JPG")} alt="" id="climbing" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/laranick1.jpg")} alt="" id="laranickbw" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/cynthiakevinsteps.jpg")} alt="" id="cynthiakevinsteps" />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/flowercommuntiybuilding.JPG")} alt="" id="flowercommuntiybuilding" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/flowerhand.JPG")} alt="" id="flowerearringcloseup" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/pastagrouppic.JPG")} alt="" id="pastagrouppic" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/bathtubcindy.jpg")} alt="" id="bathtubcindy" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/walkingrainbowfoster.jpg")} alt="" id="walkingrainbowfoster" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/cynthiakevinbacklit.jpg")} alt="" id="cynthiakevinbacklit" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/amypurple.jpg")} alt="" id="amypurple" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/blueflowers.JPG")} alt="" id="blueflowers" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/birdsinwater.JPG")} alt="" id="birdsinwater" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/lassen4hikers.jpg")} alt="" id="lassen4hikers" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/kevinsitting.jpg")} alt="" id="kevinsitting" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={require("../images/creative/photography/amandagradrunning.jpg")} alt="" id="amandagradrunning" />
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
