import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineViewGrid } from "react-icons/hi"; 
import { HiDownload } from "react-icons/hi";


const Hero = () => {
    //icon imports
    const icons=[
        '/assets/icon-1.svg',
        '/assets/icon-2.svg',
        '/assets/icon-3.svg',
        '/assets/icon-4.svg',
        '/assets/icon-5.svg',
        '/assets/icon-6.svg',
        '/assets/icon-7.svg',
        '/assets/icon-8.svg',

       
    ];

  return (
    <section>
        <div className='max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden'>
            {/* profile image */}
            <div>
                <Image
                  src='/assets/profile.png' 
                  width={150}
                  height={150}
                  className='rounded-full mb-6 mx-auto'
                  alt='profile picture'
                />
            </div>
            {/* Name */}
            <h3 className='text-lg md:text-xl font-semibold flex items-center justify-center gap-2'
            >I'm Sunil <span className='inline-block'>👋</span>
            </h3>
            {/* Title */}
            <h1 className='text-3xl md:text-5xl font-semibold mt-2 leading-tight'>
                frontend developer <br className='md:hidden' /> and UI/UX designer .
            </h1>
            {/*icons swipe */}
            <div className='relative my-6 md:my-8 mask-r-from-50% mask-l-from-50% overflow-hidden'>
                <motion.div className='flex gap-4 w-max'
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear',repeatType:'loop'   }}
                >
                    {/*icons loop*/}
                    {icons.concat(icons).map((icon,index) => (
                       
                    <Image
                        src={icon}
                        alt={`icon ${index + 1}`}
                        key={index}
                        width={40}
                        height={40}
                        className='md:w-[50px] md:h-[50px]'   
                     />
                        
                    ))}
                </motion.div>
            </div>
            {/*Buttons */}
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto '>

                <a href='#portfolio'className='custom-gradient w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300'>
                    MY Work <HiOutlineViewGrid className='text-lg'/>
                </a>
                <a href='/assets/resume.pdf' download className=' w-full md:w-auto py-3 px-8 rounded-full font-semibold border-content/30 hover:border-content/40 hover:shadow-sm transition-colors duration-300 flex items-center justify-center gap-2'>
                   My Resume <HiDownload className='text-lg'/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero
