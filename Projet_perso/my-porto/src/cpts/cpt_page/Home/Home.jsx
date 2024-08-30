import React, { useEffect, useRef, useState } from 'react'

import Typewriter from 'typewriter-effect';
import {AnimatePresence, color, motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import './Home.css'
//composants crees
import Contacter from '../../Petites_cpt/cpt_Contact/Contact';
import Footer from '../../Petites_cpt/Footer/Footer';
import Cards  from '../../Petites_cpt/Cards/Cards';
import Bloc from '../../Petites_cpt/Blocs/Blocs';


import  {Liste_portofolio, Liste_services,Icones,Images_services_home, Contenues, Image_scrol} from '../../Donnees/Listes_images';

//swiper 
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import './styles.css';
import { red } from '@mui/material/colors';
import PgTransition from '../../Petites_cpt/PageTransition/PgTransition';


// services donnees home
const Services=[
  {
    service:"Graphisme",
    retard:0.1,
    image:Images_services_home[0].im1
  }
  ,
  {
    service:"Data",
    retard:0.3,
    image:Images_services_home[0].im2
  },
  {
    service:"Website",
    retard:0.5,
    image:Images_services_home[0].im3
  }
]

//les variantes pour l'animation framer motion

const Rightslide=({retard})=>{
  return (
      {
        visible:{
          opacity:1,
          x:0,
          transition:{
            duration:0.3,
            delay:retard
          }
        },
        hidden:{
          opacity:0,
          x:100
    
        }
      }
  )
}

const Leftslide=({retard})=>{
  return (
      {
        visible:{
          opacity:1,
          x:0,
          transition:{
            duration:0.5,
            delay:retard
          }
        },
        hidden:{
          opacity:0,
          x:-100
    
        }
      }
  )
}

const Topslide=({retard})=>{
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
          y:100
    
        }
      }
  )
}

const Bottomslide={
   visible:{
          opacity:1,
          y:0
        },
      hidden:{
          opacity:0,
          y:50
    
        }
      }

const Hover=()=>{
  return (
      {
        visible:{
          scale:1.5,
          transition:{
            duration:0.3
           
          }
        },
        hidden:{
          scale:1
    
        }
      }
  )
}






/* Composant du comptage du nombre de projets realisés */


function Statistique ({niveau,time,texte}){
        const [etat,setEtat]=useState(0);
        
        useEffect(()=>{
          const controle=setInterval(()=>{
            setEtat(p=>{
              if(p>=niveau){
                clearInterval(controle)
                return niveau;
              }
              return p+1
            },time)
      
          })
          return ()=> {clearInterval(controle)}
        },[setEtat])

        return (
          <>
             <div className='flex flex-col items-center  h-fit ' >
                     <p className=' h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 bg-white  rounded-full mb-2'></p>
                     <h1  className=' text-white text-3xl lg:text-4xl font-normal ' > {etat}+ </h1> 
                     <p className=' text-white text-3xl lg:text-4xl font-bold'>{texte}</p>
                     
              </div>
          </>
        )
}

/* Composant pour les progression circulaire */
function CircleProgress({Percent,time,name}) { 
  const dimention="130"
  const radius=55.25;
  const dasharray= radius * Math.PI * 2;
  const dashoffset= dasharray-(dasharray*Percent)/100 ;
 const [progress,setProgress]=useState(0)
  const prefRef=useRef(null)
  const duree=Percent*time*0.001;
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= Percent) {
          clearInterval(interval);
          return Percent;
        }
        return prev + 1;
      });
    },time); // Ajustez l'intervalle pour contrôler la vitesse de l'animation

    return () => clearInterval(interval);
  }, [setProgress]);

  useEffect(() => {
    if (prefRef.current) {
      prefRef.current.textContent = `${progress}%`;
      console.log('aa',prefRef.current.textContent)
    }
  }, [progress]);

  const {ref ,inView}=useInView({threshold:0.3,triggerOnce:true}) //poor l'animation du bar de progress
  
  return (
    <div className="flex flex-col justify-center items-center my-3 p-2  gap-y-7  ">
      <div className='flex flex-col  justify-center items-center relative'>
      <div className="outer " style={{}}>

      </div>
      <svg  width={dimention} height={dimention} viewBox={`0 0 ${dimention} ${dimention}`} className='absolute'>
        <circle cy={dimention/2} cx={dimention/2} r={radius} strokeLinecap='round' className='backgroud stroke-gray-100'  >

        </circle>
        <motion.circle cy={dimention/2} cx={dimention/2} r={radius}  strokeLinecap='round' className=' fill-none  stroke-primary stroke-[15px]   ' ref={ref}
          strokeDasharray={dasharray}
          strokeDashoffset={dasharray}
          animate={inView?{strokeDashoffset:dashoffset}:{}}
          transition={{duration:duree }}
          >

        </motion.circle>
                     
      </svg>
      <div className="inner absolute flex justify-center items-center">
        <div className='number font-semibold' ref={prefRef}>
                          
        </div>
      </div>

                 

                  
    </div>
    <div className='h-fit w-fit flex flex-col items-center gap-y-3'>
      {/*<div className=' h-[30px] w-[30px]'> <img src={icone} alt="aa" className=' object-cover'/></div> */}
      <div className=' h-fit w-fit px-2 py-1 shadow-md rounded-md font-semibold '>{name}</div>
    </div>

    </div>
    
  )
}

function Title({name,taille}){
    return(
      <>
        <div className='flex flex-col items-center h-fit pb-5'>
                <h2 className=' mb-2 font-extralight font-poppins text-4xl bg-gradient-to-r    from-[#099fe3] to-[#644795] text-fill-transparent bg-clip-text '>{name}</h2>
                <hr className={`w-${taille} h-[5px] bg-gradient-to-r    from-[#099fe3] to-[#644795]`} />
          </div>
      </>
    )
}

function Service({image,services,retards}){
    const [hov,setHov]=useState(true)
    const{ref,inView}=useInView({threshold:0.1,triggerOnce:false})
    
    return (
      <AnimatePresence>
      
            <motion.div 
              
              onHoverStart={()=>{setHov(false)}}
              onHoverEnd={()=>{setHov(true)}}
              ref={ref}
              className= {` h-full w-[280px]  p-2 flex flex-col items-center shadow-md border rounded-xl  ${!hov && "border-primary bg-[#ffffff] text-black rounded-xl shadow-md"} `}
              
              whileHover={{scale:1.05,transition:{duration:0.3}}}
              //variants={Leftslide(retards)}
              animate={inView?{opacity:1,x:0,transition:{duration:0.5,delay:retards}}:{opacity:0,x:-100}}
              //initial="hidden"
              //whileInView={"visible"}
              >
              <p className={`  h-[150px] w-[150px] p-5 rounded-full ${hov?"bg-white  border shadow-inner ":"bg-[#fafafa]"} `}><img className=' inset-1 ' src={image} alt="ef" /></p>
              <h2 className='mt-4 mb-2 service'>{services}</h2>
              <p className=' text-center w-full  h-fit'>
                Lorem ipsium ipsa volu sequi optio recusandae impedit obcaecati 
                ducimus veritatis hic odio, maxime, minus voluptas aliquid iste .
              </p>
           </motion.div>
         
      </AnimatePresence>
    )
}
/*
function Illustration({direction,rotation}){
  const{ref,inView}=useInView({threshold:0.1,triggerOnce:true})
    return(
      <>
          <motion.div
              ref={ref} 
              className="  bg-blue-gray-400 p-5"
              animate={inView ?{opacity:1,x:0,rotate:0}:{opacity:0,x:direction,rotate:rotation}}
              transition={{duration:0.75, delay:0.75}}
              
              >
                <h1 className='flex justify-center items-center  service'>Graphisme </h1>
                <p className=' text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quam minima ducimus repudiandae reprehenderit obcaecati nulla explicabo, nihil aspernatur cupiditate molestiae omnis minus doloribus a amet recusandae! Quam, veritatis accusamus.

                </p>
              </motion.div>
      </>
    )
}*/

function Scrolls(){
  /*const images=[
    '../../../public/images_scoll/image1.png',
    '../../../public/images_scoll/image2.png',
    '../../../public/images_scoll/image4.png',
    '../../../public/images_scoll/image5.png',
    '../../../public/images_scoll/image2.png',
    '../../../public/images_scoll/image1.png',
    '../../../public/images_scoll/image1.png',
    '../../../public/images_scoll/image1.png',
    '../../../public/images_scoll/image1.png'
   
  ]*/
  const va=useInView({threshold : 0.1 , triggerOnce:true})
  
  return(
    <div className='relative h-fit w-full  flex-col items-center justify-center py-10  '>
      <div className=' flex my-3 md:my-1 '>
          <motion.div className='flex  gap-4'
            initial={{x:"0"}}
            animate={{x:"-100%"}}
            exit={{x:"0"}}
            transition={{duration:15, ease:"linear", repeat:Infinity,repeatType:"loop", repeatDelay:0}}
            >
            {
              Image_scrol.map((item,idx)=>{
                return <Cards image={item} key={idx}/>
            })
            }
            
          </motion.div>

          <motion.div className='flex gap-4'
            initial={{x:"0"}}
            animate={{x:"-100%"}}
            exit={{x:"0"}}
            transition={{duration:15, ease:"linear", repeat:Infinity,repeatType:"loop", repeatDelay:0}}
          >
            {
              Image_scrol.map((item,idx)=>{
              return <Cards image={item} key={idx}/>
            })
            }
              
          </motion.div>
        </div>
      
        <div className=' flex my-3 md:my-1 '>
          <motion.div className='flex  gap-4'
            initial={{x:"-100%"}}
            animate={{x:"0%"}}
            exit={{x:"-100%"}}
            transition={{duration:15, ease:"linear", repeat:Infinity,repeatType:"loop", repeatDelay:0}}
          >
            {
              Image_scrol.map((item,idx)=>{
                return <Cards image={item} key={idx}/>
            })
            }
              
          </motion.div>

          <motion.div className='flex gap-4'
            initial={{x:"-100%"}}
            animate={{x:"0%"}}
            exit={{x:"-100%"}}
            transition={{duration:15, ease:"linear", repeat:Infinity,repeatType:"loop", repeatDelay:0}}
            >
            {
              Image_scrol.map((item,idx)=>{
              return <Cards image={item} key={idx}/>
            })
            }
              
          </motion.div>
      </div>

      <div className=' flex  my-3 mx-3 md:my-1 '>
          <motion.div className='flex  gap-4'
            initial={{x:"0"}}
            animate={{x:"-100%"}}
            exit={{x:"0"}}
            transition={{duration:15, ease:"linear", repeat:Infinity,repeatType:"loop", repeatDelay:0}}
            >
            {
              Image_scrol.map((item,idx)=>{
                return <Cards image={item} key={idx}/>
            })
            }
            
          </motion.div>

          <motion.div className='flex gap-4'
            initial={{x:"0"}}
            animate={{x:"-100%"}}
            exit={{x:"0"}}
            transition={{duration:15, ease:"linear", repeat:Infinity,repeatType:"loop", repeatDelay:0}}
          >
            {
              Image_scrol.map((item,idx)=>{
              return <Cards image={item} key={idx}/>
            })
            }
              
          </motion.div>
        </div>
      <div className=' absolute top-0 left-0 bg-gradient-to-br from-primary to-second w-full h-full -z-0 opacity-90'></div>
      <div className=' flex justify-center items-center absolute top-0 left-0  w-full h-full z-50  ' > 
        <div className=' grid grid-flow-row gap-y-10 md:grid-flow-col  w-full  mx-5 xl:mx-40 lg:mx-20 sm:mx-10 ' ref={va.ref} >
          {va.inView &&<Statistique niveau={50} time={30} texte="Projets"/>}
          {va.inView &&<Statistique niveau={100} time={30} texte="Satisfactions"/>}
          {va.inView &&<Statistique niveau={20} time={30} texte="Contrats"/>}
        </div>
      </div>
    </div>
  )
}


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
    

     <ul className=' hidden   md:flex  justify-evenly items-center place-content-evenly w-full h-fit p-2 gap-x-10 mb-14 mt-10  mx-20 '>
     

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
    <motion.div className=' relative w-[250px] h-[250px] flex justify-center items-center border rounded-lg shadow-sm bg-center bg-cover'
      whileHover={{scale:1.01}}
      initial={{y:-10,opacity:0}}
      animate={{y:0,opacity:1}}
      exit={{y:-10,opacity:0}}
      transition={{ease:"linear",staggerChildren:0.2 }}
      onHoverStart={()=>setHov(true)}
      onHoverEnd={()=>setHov(false)}
    >
      <AnimatePresence>
      <img src={image} alt='at' className=' object-cover rounded-lg'/>
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
            className='z-50 py-1 px-2 h-fit w-fit border bg-gradient-to-r from-primary to-second text-white cursor-pointer rounded-full'
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

function Portofolio({niv}){
  const navProject=useNavigate()
  return(
    <>
      <div className='  mt-10 h-fit w-fit grid grid-flow-row-dense grid-cols-1 md:grid-cols-2  lg:grid-cols-3    gap-12   '
       
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
      onClick={()=>navProject("/Projets")}
      className='flex justify-start items-center mt-10  w-fit text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms] px-2 py-1 rounded-full'>
                      <button className='font-bold ' >Voir plus</button>
      </p>
    </>
  )
}


function Avisslider(){

  return (
    <>
         <Swiper
                    
                  
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                   
                    pagination={{
                      dynamicBullets: true,
                    }}
                    navigation={true}
                    
                   
                  >
                    <SwiperSlide className='   flex justify-center items-center   '>
                        <Client nom="Alain Tanguy HOUNGA" texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                             Optio, odio temporibus ea iste ipsam quibusdam recusandae 
                             consectetur error laudantium sit nihil ab nam eveniet suscipit"
                        />
                    </SwiperSlide>
                    <SwiperSlide className='  flex justify-center items-center   '>
                        <Client nom="Alain Tanguy HOUNGA" texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                             Optio, odio temporibus ea iste ipsam quibusdam recusandae 
                             consectetur error laudantium sit nihil ab nam eveniet suscipit"
                        />
                    </SwiperSlide>
                    <SwiperSlide className='   flex justify-center items-center   '>
                        <Client nom="Alain Tanguy HOUNGA" texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                             Optio, odio temporibus ea iste ipsam quibusdam recusandae 
                             consectetur error laudantium sit nihil ab nam eveniet suscipit"
                        />
                    </SwiperSlide>
                    <SwiperSlide className='   flex justify-center items-center   '>
                        <Client nom="Alain Tanguy HOUNGA" texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                             Optio, odio temporibus ea iste ipsam quibusdam recusandae 
                             consectetur error laudantium sit nihil ab nam eveniet suscipit"
                        />
                    </SwiperSlide>
                  </Swiper>
    </>
  )
}

const Client=({texte,nom})=>{
   return (
    <div className='flex flex-col justify-center items-center gap-y-10 m-5 md:m-10 lg:m-20  p-10 '>
        <p className=' text-justify text-sm md:text-xl  font-normal w-fit h-fit'>
            {texte}
        </p>
        <div className=' mx-28 w-full flex items-center justify-center '>
          <hr  className=' mr-2  w-full h-[1px] md:h-[2px] bg-black'/>
          <i className=' w-full text-center text-md md:text-xl font-bold'>{nom}</i>
          <hr  className=' ml-2  w-full h-[1px] md:h-[2px] bg-black'/></div>
    </div>
   )
}

function Home({refeH}) {
// redirection
const navAbout=useNavigate()
const navServices=useNavigate()
const navBlocs=useNavigate()


  const [niv,setNiv]=useState("Tout");

  const Textes = ["Data-scientist","Full-stack(React-dev)","Graphic-Designer","Prototypies web site (Framer)"]

  const {ref,inView}=useInView({ threshold:0.3 , triggerOnce:true})
 
  const skill=useInView({threshold : 0.1 , triggerOnce:true})
  return (
   
      <div
      
      ref={refeH}//pour souligner accueil
      className=' overflow-hidden  bg-gradient-to-bl from-[#d8e8f7] to-primary '> 

       {/* Banniere */}
      <div
      
      className='  flex flex-col justify-center items-center  -z-0 w-full h-fit py-10 mt-[100px] bg-gradient-to-bl from-[#d8e8f7] to-primary     '>
        <div className='grid grid-cols-1 md:gap-10 lg:gap-20 md:grid-cols-2  items-center justify-center h-fit mx-5 xl:mx-40 lg:mx-20 sm:mx-10 '>
          <div className='flex justify-center items-center md:justify-start    '>
            <div className='flex flex-col   '>
              <motion.small 
              variants={Bottomslide}
              initial="hidden"
              animate="visible"
              transition={{
                duration:0.3,
                delay:0.2
              }}
              className='salutation mb-2 md:mb-3 lg:mb-5 
                        flex justify-center items-center md:justify-start text-white
                                  '>Hello, i'm
              </motion.small>
              <motion.h1 //poour l'animation de framer motion
                className='font-extralight font-poppins mb-1 text-4xl md:text-4xl lg:text-6xl      
                        flex justify-center items-center md:justify-start
                        
                'style={{fontStyle:"normal"}}
                
                variants={Bottomslide}
                initial="hidden"
                animate="visible"
                transition={{
                  duration:0.3,
                  delay:0.5
                }}
                
                >Alain Tanguy
              </motion.h1>
              <motion.h1 //poour l'animation de framer motion
                className='font-bold text-5xl md:text-6xl lg:text-7xl font-mono 
                      flex justify-center items-center md:justify-start
                      
                '
                style={{fontStyle:"normal",fontFamily:"monospace"}}
                variants={Bottomslide}
                initial="hidden"
                animate="visible"
                transition={{
                  duration:0.3,
                  delay:0.8
                }}

                
                > HOUNGA
              </motion.h1>
              <motion.h1 

              initial={{opacity:0,x:-50}}
              animate={{opacity:1,x:0,transition:{duration:0.3,delay:1}}}
              exit={{opacity:0,x:-50}}
              
              
              className='specialite w-full my-2 md:my-3 lg:my-5 
                      flex justify-center items-center md:justify-start
                      text-white font-bold
                '>
                  <Typewriter 
                      options={
                        {
                          strings:Textes,
                          autoStart:true,
                          loop:true,
                          delay:75,
                          deleteSpeed:50,
                          cursor:"|",
                          pauseFor:2000,
                          onCreateTextNode:(character,textNode)=>{return textNode}
                        }
                      }
                /></motion.h1>
                <motion.p 
                variants={Bottomslide}
                initial="hidden"
                animate="visible"
                transition={{
                  duration:0.3,
                  delay:1
                }}
                className='w-100 h-fit  text-lg  
                        text-justify md:text-start

                '> elit. Praesentium veritatis quasi iusto sequi maxime qui sit temporibus quam nobis voluptatibus. Eum quod laudantium iusto voluptate facilis deserunt id quasi inventore.
                </motion.p>
                <motion.div 
                initial={{opacity:0,x:50}}
                animate={{opacity:1,x:0,transition:{duration:0.3,delay:1}}}

                className=' hidden lg:flex justify-center items-center gap-x-1 my-2  lg:my-5  px-1 w-fit border border-none rounded-full ring-1 ring-white bg-primary bg-opacity-50  '>
                  <button className='  px-2 py-1 my-1 border border-none rounded-full ring-1 ring-white bg-[#f8f8f8] text-black text-lg hover:bg-black hover:text-white hover:duration-[600ms] hover:ring-black'>follow me</button>
                  <div className='w-20 h-[3px] border bg-white '></div>
                  
                  {
                    Icones.map((data)=>(
                      <div key={data.id} className='flex items-center gap-x-2'>
                        <p  className=' w-[30px] h-[30px] border border-none rounded-full bg-[#f8f8f8] flex items-center justify-center hover:bg-black  hover:text-white hover:duration-[600ms]'>
                          <a className='' href='#' > <i className='h-[30px] w-[30px]'>{data.cpt}</i></a>
                        </p>
                        
                      </div>
                    ))
                  }
                  
                </motion.div>
              </div>
          </div>
          <div className='relative  flex justify-center items-center md:justify-end h-[300px]  sm:h-[350px]  lg:h-[400px]  w-full md:mt-0 mt-10 '>
            <motion.div 
            initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0,transition:{duration:0.3,delay:0.2}}}
            className='absolute  top-0 shadow-inner bg-white bg-opacity-15 h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]   rounded-xl border z-10'>

            </motion.div>
            <motion.div 
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1,transition:{duration:0.4,delay:0.5}}}
            className='absolute top-0 h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]  rounded-xl border mr-4 mt-2 md:mr-2 md:mt-2 z-20 bg-[#099fe3] bg-center bg-cover '>
                <img src={Contenues[3]} alt="aa" className=' object-cover  h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] rounded-xl' />
            </motion.div>
          </div>
        </div>
        <motion.div 
        initial={{opacity:0,x:50}}
        animate={{opacity:1,x:0,transition:{duration:0.3,delay:1.2}}}
        className=' lg:hidden flex items-center gap-x-1 mt-10  px-1 w-fit border border-none rounded-full ring-1 ring-white '>
                  <button className='  px-2 py-1 my-1 border border-none rounded-full ring-1 ring-white bg-[#f8f8f8] text-black text-lg hover:bg-black hover:text-white hover:duration-[600ms] hover:ring-black'>follow me</button>
                  <div className='w-20 h-[3px] border bg-white '></div>
                  
                  {
                    Icones.map((data)=>(
                      <div key={data.id} className='flex items-center gap-x-2'>
                        <p  className=' w-[30px] h-[30px] border border-none rounded-full bg-[#f8f8f8] flex items-center justify-center hover:bg-black  hover:text-white hover:duration-[600ms]'>
                          <a className='' href='#' > <i className='h-[30px] w-[30px]'>{data.cpt}</i></a>
                        </p>
                        
                      </div>
                    ))
                  }
                  
        </motion.div>
      </div>

      {/* A propos */}
      <div 
      
      className='flex flex-col justify-center  bg-[#fafafa] -z-0 w-full h-fit py-10'>
          
          <div className=' py-5  mx-5 xl:mx-40 lg:mx-20 sm:mx-10 '>
                <Title name="About Me" taille={20}/>
              <div className='flex flex-row items-center justify-center gap-x-4  mt-5'>
                <div className='w-full h-[2px] bg-black opacity-10'></div>
                  <motion.h5 
                    className=' p-2 rounded-lg shadow-sm text-lg  md:text-xl font-bold'
                   ref={ref}
                   animate={ inView? { opacity:1 , y:0}:{opacity:0 , y:-50  }}
                   transition={{duration:0.8}}
                   > Presentation:</motion.h5>
                  <div className='w-full h-[2px] bg-black opacity-10'></div>
              </div>
              <div className='flex flex-col md:flex-row gap-10 justify-center items-center pt-10 '>
                  <div className='flex justify-center  h-fit relative '> 
                     <p className='w-[200px] h-[200px] bg-primary rounded-full z-0 absolute'></p>
                     <p className=' w-[350px] h-[350px] border border-spacing-1 border-blue-gray-600 rounded-full mt-6  z-10 '></p>
                  </div>
                  <div className='flex flex-col items-center justify-center'> 
                    <p className='w-fit h-fit text-sm md:text-lg font-normal text-justify '>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum molestiae porro nostrum non qui impedit eligendi quo! Enim amet optio quae maxime ex aspernatur eligendi quos quam maiores iste? <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis expedita facere explicabo quod fuga distinctio assumenda alias porro facilis harum sit commodi ad, totam consequuntur cumque unde. Corporis, dolore quaerat <br />
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates incidunt natus sapiente assumenda suscipit consequuntur vel eaque odit soluta ipsam necessitatibus repellat nisi ad voluptas quibusdam, impedit, neque fugit ducimus?
                    </p>
                    <p className='flex justify-center items-center mt-10  w-fit text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms] px-2 py-1 rounded-full'>
                      <button className='font-bold ' >Download CV</button>
                    </p>
                  </div>
              </div>
          </div> 
        <div className=' py-5 flex flex-col justify-center items-center mx-5 xl:mx-40 lg:mx-20 sm:mx-10'>
          <div className='flex flex-row items-center justify-center gap-x-4  mt-5 w-full'>
              <div className=' w-full h-[3.5px] bg-black bg-opacity-10'></div>
              <motion.h5 
                    className=' p-2 rounded-lg shadow-sm text-lg  md:text-xl font-bold'
                   ref={skill.ref}
                   animate={ skill.inView? { opacity:1 , y:0}:{opacity:0 , y:-30 }}
                   transition={{duration:0.7}}
                   > Skill:
              </motion.h5>
              <div className='w-full h-[3.5px] bg-black bg-opacity-10'></div>
          </div>
              <div className='pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-7 lg:gap-14 items-center justify-center  w-full'>
                <CircleProgress  Percent="65" time={30} name="Photoshop" />
                <CircleProgress Percent="80" time={30} name="React  " />
                <CircleProgress Percent="76" time={30} name="Python" />
                <CircleProgress Percent="76" time={30} name="SQL" />
                <CircleProgress Percent="76" time={30} name="Framer " />
                
              </div>
              

              <p 
              onClick={()=>navAbout("/About")}
              className='flex justify-start items-center mt-16  w-fit text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms] px-2 py-1 rounded-full'>
                      <button className='font-bold ' >Voir plus</button>
        </p>
        </div>
       
         
      </div>
      {/* SERVICES */}
      <div 
     
      className='flex flex-col bg-white -z-0 w-full h-fit  py-10'>
          
        <div className='mx-5 xl:mx-40 lg:mx-20 sm:mx-10 py-5 flex flex-col items-center justify-center   '>
          <Title name="Nos Service" taille={20}/> 
          <div className=" w-full   h-fit flex flex-col items-center justify-center  mt-5    ">
            <div className='flex flex-col gap-y-10  md:flex-row justify-center items-center lg:gap-20 md:gap-10   w-full     '
              
            >
             <Service  retards={Services[0].retard}  services={Services[0].service} image={Services[0].image}/>
             <Service  retards={Services[1].retard}  services={Services[1].service} image={Services[1].image}/>
             <Service  retards={Services[2].retard}  services={Services[2].service} image={Services[2].image}/>
            </div>
            <p 
            onClick={()=>navServices("/Services")}
            className='flex justify-start items-center mt-10  w-fit text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms] px-2 py-1 rounded-full'>
                      <button className='font-bold ' >Voir plus</button>
            </p>
           
          </div>
        </div> 
      </div>

      {/* defilement horizontal infini */}
      <div className='flex justify-center items-center gap-32  w-full h-fit bg-gradient-to-tl from-primary to-second '>
            <Scrolls/>         
      </div>
      
      {/* Portofolio */}
      <div 
      
      
      className= 'flex flex-col bg-[#fff] -z-0 w-full h-fit  py-10'>
              <div className='mx-5 xl:mx-40 lg:mx-20 sm:mx-10 py-5 flex flex-col items-center justify-center  '>
                <Title name="Portofolio" taille={20}/>
                <div className='flex flex-col justify-center items-center w-full  '>
                  <Tag  setServices={setNiv}/>
                  <Portofolio niv={niv}/>
                  
                </div>
                
              </div>
              
              
      </div>

      {/* Avis clientels */}
      <div 
    
      className='flex flex-col bg-[#fafafa] -z-0 w-full h-fit  py-10'>
              <div className='mx-5 xl:mx-40 lg:mx-20 sm:mx-10    '>
                <Title name="Avis des clients" taille={20}/>
                <div className='flex justify-center items-center bg-white '>
                    <Avisslider/>
                </div>
              </div>     
      </div>

      {/* Blocs */}
      <div 
      
      className='flex flex-col justify-center items-center bg-[#fff] -z-0 w-full h-fit  py-10'>
              <div className='mx-5 xl:mx-40 lg:mx-20 sm:mx-10 py-5 flex flex-col items-center justify-center  '>
                <Title name="Blocs" taille={10}/>
                <div className='mt-5 gap-10 px-5 md:p-0 flex flex-col md:flex-row items-center justify-center gap-x-5 '>  
                    <Bloc late={0.1}/>
                    <Bloc late={0.25}/>
                    <Bloc late={0.45}/>
                </div>
              </div> 

               <p 
               onClick={()=>navBlocs("/Blog")}
               className='flex justify-start items-center mt-10  w-fit text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms] px-2 py-1 rounded-full'>
                      <button className='font-bold ' >Voir plus</button>
                </p>    
      </div>

      {/* Contact */}
      <div 
      
      className='flex flex-col bg-[#fafafa] -z-0 w-full h-fit  py-10'>
              <div className='mx-5 xl:mx-40 lg:mx-20 sm:mx-10 py-5 flex flex-col items-center justify-center'>
                <Title name="Contact-moi" taille={20}/>
                <Contacter/>
              </div>     
      </div>

      {/* Footer*/}
      <Footer/>
      </div>
  
   
  )
}

export default Home;





