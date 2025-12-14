"use client";

import  Navbar  from "./Components/Navbar";
import Hero from "./Components/Hero";
import Porfolio from "./Components/Porfolio";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function Home() {
  return(
    <div className='max-w-6xl mx-auto w-[90%]'>
        {/*Gradient blobs*/ }

        <div className='fixed top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-orange-200 via-pink-200 to-rose-300 rounded-b-full blur-2xl opacity-40 animate-pulse'> </div>
         <div 
          className='fixed top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-pink-300 via-rose-200 to-orange-200 rounded-b-full blur-3xl opacity-30 animate-pulse'
          style={{animationDelay:"1s"}}
          ></div>
         {/*Components */}
         <Navbar />
         <Hero />
         <Porfolio />
         <About />
         <Resume />
         <Contact />
         <Footer />
    </div>
  );
}
