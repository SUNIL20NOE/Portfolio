import React from 'react'
import { HiDownload } from 'react-icons/hi';
import { PiStarFourFill } from "react-icons/pi";

const About = () => {
  return (
   
    <section
    
     className='mt-12 pb-8' id="about">
        {/*Heading */}
           <div className='text-center'>
                <p className='text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4'>
                    <PiStarFourFill className='text-lg'/>
                     About
                </p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Turning complex problems <br/>
                    into simple designs.
                </h2>
            </div>
            {/* About data */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                {/*card-1 */}
                <div className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>
                        40+</h3>
                    <p className='text-gray-700 font-medium text-lg'>
                        Happy Client</p>
                </div>
                 {/*card-2 */}
                <div className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>
                        2+</h3>
                    <p className='text-gray-700 font-medium text-lg'>
                        Years of experience</p>
                </div>
                 {/*card-3 */}
                <div className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>
                        50+</h3>
                    <p className='text-gray-700 font-medium text-lg'>
                        Projects Completed</p>
                </div>
            </div>
            {/*content text */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
                <div className='lg:col-span-2 space-y-6'>
                    <p className='text-gray-600 text-lg leading-relaxed'>
                    I'm a passionate UI/UX designer dedicated to crafting visually stunning and user-friendly digital experiences.
                     With a keen eye for detail and a deep understanding of user behavior, I specialize in transforming complex 
                     ideas into intuitive designs that captivate and engage users.
                    </p>
                    <p> 
                    My design philosophy revolves around simplicity, functionality, and aesthetics, ensuring that every project
                     I undertake not only meets but exceeds client expectations. Be what it’s a website, mobile app, or any 
                     digital interface, I strive to create designs that leave a lasting impression and drive meaningful interactions.

                    </p>
                    {/**download button */}
                    <a href='/assets/resume.pdf' download className='custom-gradient py-4 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity-90 transition-opacity duration-300'
                    > 
                    Download CV
                    <HiDownload className='text-lg'/>
                    </a>
                </div>
                {/*Right Column */}
                <div className='lg:col-span-1 space-y-4'>
                    <div>
                        <p className='text-gray-500 text-sm font-medium mb-1'>Name</p>
                        <p className='text-gray-800 text-xl font-semibold'>Sunil Bishnoi</p>
                    </div>
                     <div>
                        <p className='text-gray-500 text-sm font-medium mb-1'>Phone</p>
                        <p className='text-gray-800 text-xl font-semibold'>+1 0090152929</p>
                    </div>
                     <div>
                        <p className='text-gray-500 text-sm font-medium mb-1'>Email</p>
                        <p className='text-gray-800 text-xl font-semibold'>hello@example.com</p>
                    </div>
                     <div>
                        <p className='text-gray-500 text-sm font-medium mb-1'>Location</p>
                        <p className='text-gray-800 text-xl font-semibold'>India,Haryana</p>
                    </div>
                </div>
            </div>

    </section>

  )
}

export default About
