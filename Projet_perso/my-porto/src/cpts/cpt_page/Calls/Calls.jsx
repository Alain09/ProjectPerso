import React from 'react';
import Footer from '../../Petites_cpt/Footer/Footer';
import Contacter from '../../Petites_cpt/cpt_Contact/Contact';
import { motion } from 'framer-motion';

function Calls() {
  return (
    <div div className=' overflow-hidden  flex flex-col items-center justify-center  w-full '>
        <div className=' bg-gradient-to-r from-primary to-second -z-0 w-full h-fit  py-10 pt-[150px]'>
            <Title name="Contact"/>
          </div>
        <div className='flex flex-col bg-[#fff] -z-0 w-full h-fit  py-10'>
              <div className='mx-5 xl:mx-40 lg:mx-20 sm:mx-10 py-5 flex flex-col items-center justify-center '>
                <div className='flex justify-center items-center mt-5 w-full '>
                   <Contacter retard={0.5}/>
                  
                </div>
              </div>     
       </div>
        <Footer/>
        
      </div>
  )
};

export default Calls

function Title({name}){
  return(
    <>
      <div className='flex flex-col items-center h-fit pb-5'>
      <motion.h2 
              initial={{opacity:0 ,rotateY:90}}
              animate={{opacity:1,rotateY:0}}
              transition={{duration:0.4 ,delay:0.3}}
              className=' font-poppins font-extralight text-white text-4xl md:text-5xl '>{name}</motion.h2>
              
        </div>
    </>
  )
};