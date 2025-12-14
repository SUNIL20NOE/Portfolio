import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from 'react';


  const contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "dc32a280-bef5-4b53-89f4-b23f1780fce2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
     
  return (
  <section className='mt-12 pb-8 id="contact'>
      {/*Heading */}
      <div className='text-center'>
                    <p className='text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4'>
                        <PiStarFourFill className='text-lg'/>
                         Contact
                    </p>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                        Let's make something <br/>
                        awesome together!
                    </h2>
                </div>  
                {/*contact form */}  
                <form 
                 onSubmit={onSubmit}
                 className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-xl font-semibold'>
                     {/*left side */}
                    <div className='flex flex-col space-y-6'>
                        <input type="text" name="name " id="" placeholder="Your Name*" className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3' required/>
                        <input type="email" name="email " id="" placeholder="Email Address*" className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3'required/>
                    </div>
                    {/*right side */}
                    <div className='flex flex-col space-y-6'>
                       
                        <input type="text" name="Company" id="" placeholder="Company Name*" className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3' required/>
                         <input type="tel" name="Phone " id="" placeholder="Phone Number*" className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3' required/>
                    </div>
                    {/*text area */}
                    <div className='md:col-span-2'>
                        <textarea name="message" id="" placeholder="A Few Words"
                        className='w-full border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-2 h-24 resize-none'
                        required
                        ></textarea>
                    </div>
                    {/*Button */}
                    <div className='md:col-span-2'>
                    <button type="submit" className='mt-6 custom-gradient text-white text-[1rem] font-semibold py-3 px-6 rounded-2xl flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer'>
                        Send Message <FaPaperPlane/>
                    </button>
                  </div>
                  <span>{result}</span>

                </form>    
                
                
  </section>
  )
    }

export default contact
