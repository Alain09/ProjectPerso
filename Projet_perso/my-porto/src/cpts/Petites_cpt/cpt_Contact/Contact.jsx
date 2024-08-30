import React from 'react';
import ConFormulaires from '../Formulaire/Formulaire';
import { motion } from 'framer-motion';

function Contacter ({retard}){
  
    return (
      <>
          <div className='flex flex-col lg:flex-row items-center justify-center  gap-x-6 mt-8 w-full gap-10  '>
            <div 
              
             // transition={{repeat:Infinity,repeatType:"loop",type:"spring", stiffness:0.5,duration:0.5}}
              className=' h-fit w-fit flex flex-row  gap-x-3  '>
              <div className=' flex flex-col items-end '>
                <motion.div 
                //animate={{scale:1.05,transition:{repeat:Infinity,repeatType:"loop",duration:0.4,repeatDelay:0.3}}}
                className=' h-[150px] w-[150px] bg-primary rounded-tl-3xl'>

                </motion.div>
                <div className=' h-[140px] w-[140px] bg-second rounded-bl-3xl mt-3 mb-5 '></div>
              </div>
              <div className=' flex flex-col items-start '>
                <div className=' h-[140px] w-[140px] bg-second  rounded-se-3xl mt-5 mb-3  '></div>
                <div className=' h-[150px] w-[150px] bg-primary rounded-ee-3xl '></div>
              </div>
              
              
            </div>
            <div className=' h-fit w-full p-2 '>
              <ConFormulaires retard={retard}/>
            </div>
  
          </div>
      </>
    )
  };
  

export default Contacter;