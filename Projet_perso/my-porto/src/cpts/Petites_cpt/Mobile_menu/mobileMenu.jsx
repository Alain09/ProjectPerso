import { AnimatePresence,motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import Button from '../Button/Button';

const Listes=[
  {
    nom:"Accueil",
    lien:"/"
  },
  {
    nom:"A propos",
    lien:"/About"
  },
  {
    nom:"Services",
    lien:"/Services"
  },
  {
    nom: "Projets",
    lien:"/Projets"
  },
  {
    nom:"Blog",
    lien:"/Blog"
  }

  
];

function  MobMenu({bar,setBar}) {
  const {hid,setHid}=useState(false)
  return (
    <AnimatePresence mode='wait'>
      {
        bar &&
        <motion.div 
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0,transition:{delay:0.15,duration:0.3}}}
        exit={{opacity:0,y:-100}}
        transition={{duration:0.3}}
        
        >
          <div 
              
              className={` lg:hidden  flex flex-col justify-center items-center  `}>
                
                      <ul className=' flex flex-col justify-center items-center pt-5 w-full'> 
                        {
                          Listes.map((item,id)=>(
                            <NavLink onClick={()=>setBar(!bar)}  to={item.lien}   key={id}  href='#'   className={ ({isActive})=>(isActive ? `bg-gradient-to-r  from-[#099fe3] to-[#644795] font-bold text-fill-transparent bg-clip-text duration-200  sm:text-lg   flex justify-center items-center   py-3  cursor-pointer w-full `:`sm:text-lg   flex justify-center items-center   py-3  cursor-pointer w-full  `)}>{item.nom}</NavLink>
                          ))
                        } 

                          <NavLink onClick={()=>setBar(!bar)}  to="/Calls" 
                          className={({isActive})=> (isActive?"mt-10 flex  p-1 w-[140px] rounded-full   justify-center taille bg-gradient-to-r ring-opacity-100    from-[#099fe3] to-[#644795] ring-[#ffffff] text-white duration-[600ms]":"mt-10 flex  p-1 w-[140px] rounded-full   justify-center taille bg-[#ffffff] text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms]")}>
                            <button >
                              Contacter-moi
                            </button>
                             
                          </NavLink>
                    
                      </ul>   
          </div>
       
        </motion.div>

      }
       
    </AnimatePresence>
  )
}

export default MobMenu