import React from 'react'
import  {Images_services_home} from '../../Donnees/Listes_images';
import Button from '../Button/Button';
import { motion } from 'framer-motion';


const Bottomslide=({retard})=>{
  return (
      {
        visible:{
          opacity:1,
          y:0,
          transition:{
            duration:0.3,
            delay:retard
          }
        },
        hidden:{
          opacity:0,
          y:-100
    
        }
      }
  )
}

function Bloc({late}) {
  return (
    <motion.div   
    
    initial={{opacity:0,
      y:100}}
    whileInView={{ opacity:1,
      y:0,
      transition:{
        duration:0.3,
        delay:late
      }}}
      viewport={{
        once:true,
        amount:0.2
      }}
    className='flex justify-center items-center '>
      <div className=' flex flex-col items-center justify-center h-fit w-fit border bg-[#fefefe] p-2 rounded-md shadow-md'>
        <div className=' h-[200px] w-full  bg-white rounded-lg inset-1 flex items-center justify-center'>
            <img className=' h-[200px] w-fit' src={Images_services_home[0].im1} alt="ss" />
      </div>
      <div className=' flex flex-col  items-center justify-center my-2 gap-5'>
        <p className='  text-center w-fit h-fit'>Lorem ipsum dolor sit amet consectetur,adip
        isicing elit. Animi quae voluptatum repellendus doloremque dolorum veritatis
        </p>
        <p className='flex justify-start items-center   w-fit   ring-1 ring-opacity-30  bg-gradient-to-r hover:ring-opacity-100   from-[#099fe3] to-[#644795]  ring-[#ffffff] text-white hover:duration-[600ms] px-2 py-1 rounded-full'>
                      <button className='font-bold ' >savoir plus</button>
        </p>

      </div>
      </div>
   
    </motion.div>
  )
}

export default Bloc