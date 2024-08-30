import React, { useState } from 'react';
import  {Images_services_home,Icones} from '../../Donnees/Listes_images';
import Footer from '../../Petites_cpt/Footer/Footer';
import './Service.css';
import { motion,AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function Services() {
  const navCalls=useNavigate()
  return (
    <div div className=' overflow-hidden  flex flex-col items-center justify-center  w-full '>
        <div className=' bg-gradient-to-r from-primary to-second -z-0 w-full h-fit  py-10 pt-[150px]'>
            <Title name="Services "/>
        </div>

        <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5,delayChildren:0.5}}
        className=' mx-5 xl:mx-40 lg:mx-20 sm:mx-10 py-5 flex flex-col items-center justify-center  my-10 ' >
            <Catalogues_1/>
            <Catalogues_2/>
            <Catalogues_1/>
            <Catalogues_2/>
            <Catalogues_1/>
            <Catalogues_2/>
        </motion.div>
        <p 
          onClick={()=>navCalls("/Calls")}
          className='flex justify-start items-center mb-16  w-fit text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms] px-2 py-1 rounded-full'>
                      <button className='font-bold ' >Contacter-moi</button>
      </p>
        <Footer/>
        
    </div>
  )
};

export default Services

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

function Catalogues_1(){
    const {sol,setSol}=useState(false)

    return (
        <>
            <div className=' flex flex-col lg:flex-row items-center justify-center my-14  w-full '> 
                <motion.div 
                    initial={{x:-200 ,rotate:180,opacity:0}}
                    whileInView={{x:0 ,rotate:0,opacity:1}}
                    transition={{duration:0.5}}
                    className=' p-4     flex justify-center items-center  '>
                    <p className='h-[250px] w-[250px] md:h-[350px] md:w-[350px] border rounded-full border-primary ring-2  shadow-lg flex justify-center items-center '>
                        <img className=' h-[200px] w-[200px] md:h-[300px] md:w-[300px] ' src={Images_services_home[0].im1} alt="ss" />
                    </p>
                </motion.div>
                <motion.div 
                initial={{x:150 ,opacity:0}}
                whileInView={{ x:0 ,opacity:1,transition:{when:"beforeChildren",duration:0.5}}}
               
                className='border-l-4  border-l-primary  h-fit px-8 flex flex-col items-center justify-center '>
                    <motion.h1 
                     initial={{opacity:0,
                        y:50}}
                      whileInView={{ opacity:1,
                        y:0,
                        transition:{
                          duration:0.5,
                          delay:0.15
                        }}}
                        viewport={{
                          once:false,
                          amount:0.1
                        }}
                      
                        className='my-5 text-3xl md:text-5xl font-bold '>
                        Graphisme
                    </motion.h1>


                    <motion.p 
                         initial={{opacity:0,
                            y:100}}
                          whileInView={{ opacity:1,
                            y:0,
                            transition:{
                              duration:0.5,
                              delay:0.3
                            }}}
                            viewport={{
                              once:false,
                              amount:0.1
                            }}
                           
                        className=' text-justify text-md md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Asperiores nisi quisquam ipsam praesentium
                         officia id, possimus quidem tempora sapiente minima 
                         eligendi dolor necessitatibus voluptas dolores excepturi,
                          nostrum veritatis blanditiis. Sint?
                          officia id, possimus quidem tempora sapiente minima 
                         eligendi dolor necessitatibus voluptas dolores excepturi,
                          nostrum veritatis blanditiis. Sint?
                        </motion.p>
                </motion.div>
            </div>
        </>
    )
};

function Catalogues_2(){

    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-center my-14  w-full'> 
            <motion.div 
                    initial={{x:200 ,rotate:180,opacity:0}}
                    whileInView={{x:0 ,rotate:0,opacity:1}}
                    transition={{duration:0.5,delay:0.1}}s
                    className=' lg:hidden p-4 flex justify-center items-center'>
                    <p className='h-[250px] w-[250px] md:h-[350px] md:w-[350px] border rounded-full bg-primary flex justify-center items-center shadow-lg '>
                        <img className=' h-[200px] w-[200px] md:h-[300px] md:w-[300px] ' src={Images_services_home[0].im1} alt="ss" />
                    </p>
            </motion.div>  
            <motion.div 
                initial={{x:-150 ,opacity:0}}
                whileInView={{ x:0 ,opacity:1,transition:{when:"beforeChildren",duration:0.5}}}
               
                className='border-r-4  border-r-primary  h-fit px-8 flex flex-col items-center justify-center '>
                    <motion.h1 
                     initial={{opacity:0,
                        y:50}}
                      whileInView={{ opacity:1,
                        y:0,
                        transition:{
                          duration:0.5,
                          delay:0.15
                        }}}
                        viewport={{
                          once:false,
                          amount:0.1
                        }}
                      
                        className=' my-5 text-3xl md:text-5xl font-bold '>
                        Graphisme
                    </motion.h1>


                    <motion.p 
                         initial={{opacity:0,
                            y:100}}
                          whileInView={{ opacity:1,
                            y:0,
                            transition:{
                              duration:0.5,
                              delay:0.3
                            }}}
                            viewport={{
                              once:false,
                              amount:0.1
                            }}
                           
                        className=' text-justify text-md md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Asperiores nisi quisquam ipsam praesentium
                         officia id, possimus quidem tempora sapiente minima 
                         eligendi dolor necessitatibus voluptas dolores excepturi,
                          nostrum veritatis blanditiis. Sint?
                          officia id, possimus quidem tempora sapiente minima 
                         eligendi dolor necessitatibus voluptas dolores excepturi,
                          nostrum veritatis blanditiis. Sint?
                        </motion.p>
                </motion.div>
                <motion.div 
                    initial={{x:200 ,rotate:180,opacity:0}}
                    whileInView={{x:0 ,rotate:0,opacity:1}}
                    transition={{duration:0.5,delay:0.1}}s
                    className=' hidden p-4     lg:flex justify-center items-center'>
                    <p className='h-[250px] w-[250px] md:h-[350px] md:w-[350px] border rounded-full bg-primary flex justify-center items-center shadow-lg '>
                        <img className=' h-[300px] w-[300px] ' src={Images_services_home[0].im1} alt="ss" />
                    </p>
                </motion.div>
            </div>
        </>
    )
};