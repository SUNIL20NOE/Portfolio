import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from 'framer-motion';

const Porfolio = () => {
    //project array
    const Projects = [
        {
            id: 1,
            title: "3D Isometric House",
            imageUrl: "/assets/portfolio-1.png",
            tags: ["Illustration", "3D Render"],
        },
         {
            id: 2,
            title: "Mobile App UI Design",
            imageUrl: "/assets/portfolio-2.png",
            tags: ["UI/UX", "Figma"],
        },
         {
            id: 3,
            title: "Notifiication Icon",
            imageUrl: "/assets/portfolio-3.png",
            tags: ["Illustration", "3D Render"],
        },
         {
            id: 4,
            title: "Smart Penguin",
            imageUrl: "/assets/portfolio-4.png",
            tags: ["Illustration", "3D Render"],
        },
    ];


    return (
   <section className='my-8 id="portfolio'>
    {/* Heading */}
    <div className='text-center'>
        <p className='text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4'>
            <PiStarFourFill className='text-lg'/>
            Portfolio
        </p>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
            Check Out my featured <br/>
            Projects
        </h2>
    </div>
    {/* Projects Grid */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {Projects.map((project) => (
            <div 
                key={project.id}
            className='group relative bg-white/5 background-blur-sm rounded-3xl overflow-hidden border border-white/10 cursor-pointer'>
                <div className='relative ouverflow-hidden'> 
                    <img 
                     src={project.imageUrl} 
                     alt={project.title}
                     className='w-full h-64 md:h-[450px] object-cover'
                     />
                     <div className='absolute inset-0 bg-gradient-to-t from-black-60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
            {/* Project Info */}
                <div className='absolute bottom-4 left-4 right-4 p-3 md:p-6 rounded-2xl bg-black/20 backdrop-blur-md border-t border-white'> 
                    <div className='flex flex-wrap gap-2 mb-3'>
                    {project.tags.map((tagText, index) => (
                        <span key={index}
                         className='px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20'>
                        {tagText}</span> 
                    
                    ))}
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl font-bold text-white transition-colors duration-300'>
                        {project.title}</h3>
            { /*Button */}
                        <button className='flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors duration-300'>
                            <HiArrowUpRight className='text-lg'/>
                        </button>
                    </div>
                </div>
            {/*hover glow effect */}
                <motion.div 
                initial={{ opacity: 0 }}
                 whileHover={{ opacity: 1 }}E
                  transition={{duration:0.4}}
                   className='absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10'>
                   </motion.div>
            </div> 
        ))}
    </div>
   </section>
  )
}

export default Porfolio
