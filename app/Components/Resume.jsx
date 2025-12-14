import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { PiGraduationCapFill } from "react-icons/pi";

const Resume = () => {
    //Education array
    const educationData = [
        {
            year:"20215 - 2016",
            title:"Bachelor of Technology in Computer Science",
            institute:"New York University",
            description:"Graduated with First Class Honors, specializing in Software Development and Data Science."

        },
          {
            year:"2019 - 2021",
            title:"UI/UX design Specialization",
            institute:"California Institute of the Arts",
            description:"Graduated with First Class Honors, specializing in Software Development and Data Science."

        },
          {
            year:"2022",
            title:"Masters in Computer Application",
            institute:"Delhi University",
            description:"Graduated with First Class Honors, specializing in Software Development and Data Science."

        },
      
    ];
//working data array
const workData=[
    {
        year:"2018-2019",
        title:"Illustractor",
        company:"creative Mind agency",
        description:"I created original images for a range of digital and printed products"
    },
       {
        year:"2019-2021",
        title:"Grapic designer",
        company:"Moon Light Agency",
        description:"I created original images for a range of digital and printed products"
    },   {
        year:"2021-now",
        title:"UI/UX Designer",
        company:"Infosys",
        description:"I am actively involved in cresting user interface for mobile apps and website"
    },
]

  return (
    <section className='mt-12 pb-8 id="resume'>
          {/* Heading */}
            <div className='text-center'>
                <p className='text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4'>
                    <PiStarFourFill className='text-lg'/>
                    Resume
                </p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Education and practical <br/>
                    experience.
                </h2>
            </div>
            {/*timeline */}
            <div className='grid grid-cols-2 md:grid-cols-2 gap-4 space-y-12'>
                {/*EDUCATION */}
                <div>
                    <h3 className='text-xl md:text-2xl font-bold text-content mb-8'>My Education</h3>
                    <div className='relative'>
                        <div className='absolute left-4 top-0 bottom-0 custom-gradient opacity-60'></div>

                        <div>
                            {educationData.map((item, index) => (
                                <div className='relative flex items-start space-x-6 pb-8'
                                key={index}
                                >
                                    <div className='relative flex-shrink-0'>
                                        
                                        <div className='w-8 h-8 custom-gradient rounded-full flex items-center justify-center'>
                                            <PiGraduationCapFill className='w-4 h-4 text-white'/>
                                        </div>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <div className='flex item-center space-x-2 mb-2'>
                                            <span className='text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded'>
                                               {item.year}</span>
                                        </div>
                                        <h4 className='text-lg font-semibold text-content'>
                                            {item.title}
                                            </h4>
                                        <p className='text-gray-600 mb-2'>{item.institute}</p>
                                        <p className='text-gray-700 text-sm'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                 </div>
                    {/*WORK */}
                <div>
                    <h3 className='text-xl md:text-2xl font-bold text-content mb-8'>
                        Work Experience
                        </h3>
                    <div className='relative'>
                        <div className='absolute left-4 top-0 bottom-0 custom-gradient opacity-60'></div>

                        <div>
                            {workData.map((item, index) => (
                                <div className='relative flex items-start space-x-6 pb-8'
                                key={index}
                                >
                                    <div className='relative flex-shrink-0'>
                                        
                                        <div className='w-8 h-8 custom-gradient rounded-full flex items-center justify-center'>
                                            <PiGraduationCapFill className='w-4 h-4 text-white'/>
                                        </div>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <div className='flex item-center space-x-2 mb-2'>
                                            <span className='text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded'>
                                               {item.year}</span>
                                        </div>
                                        <h4 className='text-lg font-semibold text-content'>
                                            {item.title}
                                            </h4>
                                        <p className='text-gray-600 mb-2'>{item.company}</p>
                                        <p className='text-gray-700 text-sm'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                 </div>
            </div>
    </section>
  )
}

export default Resume
