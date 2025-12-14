import React from 'react'
import { FaDribbble,FaBehance, FaInstagram,FaTwitch,FaPinterestP, } from 'react-icons/fa'

const Footer = () => {
    //social media links array
    const socialIcons = [
        {icon:FaDribbble,href:"https://dribbble.com"},
         {icon:FaBehance,href:"https://www.behance.net"},
          {icon:FaInstagram,href:"https://www.instagram.com"},
           {icon:FaTwitch,href:"https://www.twitch.tv"},
           {icon:FaPinterestP,href:"https://www.pinterest.com"},

    ]
  return (
   <footer className="py-12 px-4 text-center">
    <div className="flex justify-center gap-2 md:gap-6 mb-8">

      {socialIcons.map((social, index) => {
        const IconComponent = social.icon;
        return(
        <a key={index} 
           href={social.href} 
           className='p-4 rounded-2xl border-outer hover:bg-primary/10 transition-all'>
        
           <IconComponent className="text-xl md:text-2xl text-primary"/>
        </a>
        );
    })}

    </div>

     <p className='text-xl md:text-2xl font-semibold text-gradient max-w-3xl mx-auto mb-8'>
        Want to know more about me, tell me about your project or just to say hello?
        drop me a line and I'will get back as soon as possible.
    </p>
    <hr className='border-outer mb-8'/>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-md text-content'>
        <div>
            <p className='font-semibold'>Location</p>
            <p>India</p>
        </div>
        <div>
            <p className='font-semibold'>Phone</p>
            <p>9351642098</p>
        </div>
        <div>
            <p className='font-semibold'>Email</p>
            <p>helloworld@gmail.com</p>
        </div>
    </div>

    </footer>
  )
}

export default Footer
