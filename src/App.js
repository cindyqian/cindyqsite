import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          /> */}

          <h1 className="text-xl text-center font-[family-name:var(--font-geist-mono)]">
              Cindy Qian
          </h1>

          <p className="text-sm text-left font-[family-name:var(--font-geist-mono)] max-w-md lowercase">
            {/* welcome! take a look around :) */}

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


          <div className="grid grid-cols-1 gap-4">

              <div>
                <img className="object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                  src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                  alt="gallery-photo" />
              </div>

              <div>
                <img className="absolute object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                  src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                  alt="gallery-photo" />
              </div>

              <div>
                <img className="object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80"
                  alt="gallery-photo" />
              </div>
              
              <div>
                <img className="object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                  alt="gallery-photo" />
              </div>
              <div>
                <img className="object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                  alt="gallery-photo" />
              </div>
              <div>
                <img className="object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                  src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
                  alt="gallery-photo" />
              </div>
              <div>
                <img className="object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                  src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="gallery-photo" />
              </div>
              <div>
                <img className="object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                  src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="gallery-photo" />
              </div>
              <div>
                <img className="object-cover object-center w-full max-h-80 max-w-md rounded-lg"
                  src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80"
                  alt="gallery-photo" />
              </div>
            </div>



          {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div> */}




        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            /> */}
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            /> */}
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            /> */}
            Go to nextjs.org →
          </a>
        </footer>
      </div>
  );
}

export default App;
