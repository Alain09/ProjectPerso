import React, { useRef } from 'react';
import Bloc from '../../Petites_cpt/Blocs/Blocs';
import Footer from '../../Petites_cpt/Footer/Footer';
import { useScroll,motion ,useTransform} from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Blocs() {
  const navCalls=useNavigate()
 // const refe=useRef(null)
 /* const {scrollYProgress}=useScroll({
    target:refe,
    offset:["end 80%","10% end"]
  })*/
 // const rot=useTransform(scrollYProgress,[0,1],["0%","100%"])
  //const lef=useTransform(scrollYProgress,[0,1],["0%","100%"])
  //const op=useTransform(scrollYProgress,[0,1],[0,1])
  return (
    <div div className=' overflow-hidden  flex flex-col items-center justify-center  w-full '>
         <div className=' bg-gradient-to-r from-primary to-second  -z-0 w-full h-fit  py-10 pt-[150px]'>
            <Title name="Blocs"/>
          </div>

        <div 
      
             className='flex flex-col bg-[#fff] -z-0 w-full h-fit  py-10'>
              <div className='mx-5 xl:mx-40 lg:mx-20 sm:mx-10 py-5 flex flex-col items-center justify-center  '>
                
                <div className='mt-5 gap-10 px-5 md:p-0 flex flex-col md:flex-row items-center justify-center gap-x-5 '>  
                    <Bloc late={0.1}/>
                    <Bloc late={0.25}/>
                    <Bloc late={0.45}/>

                    
                </div>
              </div>     
         </div>
         <p 
                        onClick={()=>navCalls("/Calls")}
                        className='flex justify-center items-center mt-2 mb-16  w-fit text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms] px-2 py-1 rounded-full'>
                                    <button className='font-bold ' >Contacter-moi</button>
          </p>
       
       {/*  <div className='  px-40 py-5 flex flex-col items-center justify-center  my-10 ' >
            <div className=' relative z-10 mt-5 flex flex-row items-center justify-center gap-x-5'>  
                    <Bloc/>
                    <Bloc/>
                    <Bloc/>
                    <motion.div
                     /* whileInView={{
                        opacity:0,
                        x:-150,
                       y:120,
                      
                        transition:{duration:0.8}
                      }}
                      viewport={{
                        amount:0.3
                      }}*/
                       /* ref={refe}
                        style={{opacity:op}}
                         transition={{duration:0.5,type:"spring"}}
                        className='  absolute top-0 w-full h-full bg-black'></motion.div>
                </div>
               
            </div> */}
       
        <Footer/>
        
    </div>
  )
}

export default Blocs

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