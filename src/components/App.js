// import logo from '../logo.svg';
import './App.css';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { Parallax } from 'react-scroll-parallax';

function App() {


  // const handleScrollTo = () => {
  //   console.log("scrolled");
  // };

  // React.useEffect(() => {
  //   if (props.offset) {
  //     window.addEventListener("scroll", handleScrollTo);
  //   }
  //   return function cleanup() {
  //     if (props.offset) {
  //       window.removeEventListener("scroll", handleScrollTo);
  //     }
  //   };
  // });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <h1 className="text-xl text-center font-[family-name:var(--font-geist-mono)]">
              Cindy Qian
          </h1>

          <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] max-w-md lowercase">

            Hello, I'm Cindy! I’m passionate about building products and experiences that empower people
            to express themselves in creative and meaningful ways. My creative soul thrives
            when I’m helping others bring their ideas to life!

            <br></br><br></br>

            I’ve had the chance to work on a range of exciting projects---from designing a custom
            point of sale system for a wholesale bakery to developing an IoT mobile app for
            tracking construction machinery data to implementing new information systems for
            an operations team. On the side, I love running my own photography business,
            organizing hackathons, and creating content. While I'm not at my laptop, I enjoy playing pokemon go

            <br></br><br></br>

            While I’m still figuring out the path that fits me best, I’m seeking opportunities
            that will let me hone my skills, collaborate with inspiring teams, and keep
            learning along the way.

            <br></br><br></br>

            Welcome! Take a look around :)
          </p>

          <Parallax speed={50} className="absolute row-start-3">
            <div className="grid grid-cols-1 gap-4">

                <div>
                  <img className="object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                    src={require("../images/shoreline.png")}
                    alt="Picture of Cindy Qian" />
                </div>

                {/* <div>
                <img className="object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                    src={require("../images/shoreline.png")}
                    alt="Picture of Cindy Qian" />
                </div> */}
            </div>
          </Parallax>

        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>
  );
}

export default App;
