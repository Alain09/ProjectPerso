import React,{useState,useRef} from 'react';
import './Portofolio.css';
import {AnimatePresence, motion} from 'framer-motion';

import Footer from '../../Petites_cpt/Footer/Footer';

import  {Liste_portofolio,Liste_services} from '../../Donnees/Listes_images';

//swiper 
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import Button from '../../Petites_cpt/Button/Button';
import { useNavigate } from 'react-router-dom';

function Portofolios() {

    const [niv,setNiv]=useState("Tout");
  return (
    <div className=' overflow-hidden  flex flex-col items-center justify-center  w-full '>

          <div className=' bg-gradient-to-r from-primary to-second -z-0 w-full h-fit  py-10 pt-[150px]'>
            <Title name="Mes Réalisations"/>
          </div>
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5,duration:0.5}}
              className= 'flex flex-col bg-[#fff] -z-0 w-full h-fit  py-10'>
              <div className='mx-5 xl:mx-40 lg:mx-20 sm:mx-10 py-5 flex flex-col items-center justify-center  '>
                
                <div className='flex flex-col justify-center items-center w-full  '>
                  <Tag  setServices={setNiv}/>
                  <Porto niv={niv}/>
                  
                </div>
                
              </div>
              
              
      </motion.div>
              
           <Footer/>   
      </div>
  )
}

export default Portofolios


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

//section portofolio 
function Listes_services( {chlidren,setServices}){
  /*const refe=useRef(null)*/
   {/*  ref={refe}
    onClick={()=>{
      if(!refe.current) return ;
     const {width} = refe.current.getBoundingClientRect();
      setPosition({
        left:refe.current.offsetLeft,
       width,
        opacity:1
      },
     setServices(prev=>prev=chlidren));
  
  
    }} */}
  const va={
    hid:{color:""},
    vis:{backgroundColor:"#099fe3",scale:1.02}
  }
  return  (
  <> 
    <motion.li 
    variants={va}
    initial="hid"
    whileTap={"vis"}
    
    onClick={()=>{
      
      setServices(prev=>prev=chlidren);
      
     
     }}
     
     className={`  cursor-pointer  flex justify-center items-center w-fit  z-10 px-2 py-1 shadow-md text-lg lg:text-2xl rounded-sm md:rounded-lg  `}>
      {chlidren}</ motion.li>
  </>)
}

/*function Cursor( {}){
  return  (
  <motion.li 
   
    className=' absolute z-20 px-2 py-1 h-9 shadow-sm text-lg lg:text-2xl  bg-black rounded-lg text-white'/>)
}*/

const Tag=({setServices})=>{
 {/*
   const [pos, setPos]=useState({
    left:"4px",
    width:"79.929px",
    opacity:1
  })
  
  console.log("alain",pos.left)  
  */}
  return( 
  
  <>
    

     <ul className=' hidden   md:flex justify-evenly items-center place-content-evenly w-full h-fit p-2 gap-x-10 mb-14 mt-10  mx-20 '>
     

            {
              Liste_services.map((item,idx)=>
                (
                
                    <Listes_services key={idx} chlidren={item.service}  setServices={setServices}/>
                 
                  
                )
                
              )
            }
     
      {/*<Cursor /> */}
                    
    </ul>


    {/* Pour petit ecran  */}
    <ul className=' md:hidden  flex justify-evenly items-stretch w-full h-fit gap-x-10 mb-14 mt-10  mx-20 '>
      <Swiper 
      
       slidesPerView={2.5}
       spaceBetween={5}
       className=' mx-10'
      >

            {
              Liste_services.map((item,idx)=>
                (
                  <SwiperSlide>
                    <Listes_services key={idx} chlidren={item.service}  setServices={setServices}/>
                  </SwiperSlide>
                  
                )
                
              )
            }
      </Swiper>
      {/*<Cursor /> */}
                    
    </ul>
  </>
   
  )
}

function Cardes({image, Name}){
  const [hov,setHov]=useState(false)
  
  return (
  <div className='flex flex-col items-center justify-center'>
    <motion.div className=' relative w-[250px] h-[250px]  border rounded-lg shadow-sm'
      whileHover={{scale:1.01}}
      initial={{y:-10,opacity:0}}
      animate={{y:0,opacity:1}}
      exit={{y:-10,opacity:0}}
      transition={{ease:"linear",staggerChildren:0.2 }}
      onHoverStart={()=>setHov(true)}
      onHoverEnd={()=>setHov(false)}
    >
      <AnimatePresence>
      <img src={image} alt='at' className=' w-[250px] h-[250px] flex justify-center items-center object-cover rounded-lg'/>
      { hov && 
        <motion.div 
        className=' absolute top-0 w-full h-full rounded-lg flex justify-center items-center'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{ ease:"linear"}}
        >
          <div className=' absolute inset-0 bg-gray-700 rounded-lg  opacity-70  z-0'></div>
          <motion.h2 
            className='z-50 py-1 px-2 h-fit w-fit border text-white bg-gradient-to-r from-primary to-second rounded-full'
            initial={{y:10}}
            animate={{y:0}}
            exit={{y:10}}
          > {Name}</motion.h2>

        </motion.div>
      }
      </AnimatePresence>
      
      
    </motion.div>
  </div>
)}

function Porto({niv}){
const navCalls=useNavigate()
  return(
    <>
      <div className='  my-10 h-fit w-fit grid grid-flow-row-dense grid-cols-1 md:grid-cols-2  lg:grid-cols-3    gap-12   '
       
      >
        {
          Liste_portofolio.map((item,idx)=>{
            if(niv===item.categorie)
            return (
              <Cardes key={idx} image={item.image} Name={item.name} />
            )
          })
        }
      </div>
      <p 
          onClick={()=>navCalls("/Calls")}
          className='flex justify-start items-center mt-10  w-fit text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms] px-2 py-1 rounded-full'>
                      <button className='font-bold ' >Contacter-moi</button>
      </p>
    
    </>
  )
}
  