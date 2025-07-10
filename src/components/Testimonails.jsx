import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from "framer-motion"

const Testimonails = () => {
  return (
    <motion.div
    initial={{opacity:0, x:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
     className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id="Testimonails">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonails</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those who found Home with us</p>

      <div className='flex     flex-wrap justify-center  gap-8 '>
        {testimonialsData.map((testimonail , index)=>(
            <div key={index} className='max-w-[300px] border shadow-lg rounded px-1 py-5 text-center'>
                <img src={testimonail.image} alt={testimonail.alt} className='rounded-full w-20 h-20 mb-4 mx-auto'></img>
                <h2 className='text-xl text-gray-700 font-medium'>{testimonail.name}</h2>
                <p className='text-gray-500 mb-4 text-sm'>{testimonail.title}</p>
                <div className='flex justify-center text-red-500 mb-4 gap-1'>
                    {Array.from({length: testimonail.rating},(item, index)=>(
                        <img key={index} src={assets.star_icon}></img>
                    ))}
                </div>

                <p className='text-gray-600'>{testimonail.text}</p>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonails
