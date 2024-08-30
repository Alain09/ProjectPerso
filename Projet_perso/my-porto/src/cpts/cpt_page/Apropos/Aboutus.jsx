import React ,{useState,useRef,useEffect}from 'react';
import './Aboutus.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import  {Images_services_home,Icones} from '../../Donnees/Listes_images';
import Footer from '../../Petites_cpt/Footer/Footer';

function Aboutus() {

    const {ref,inView}=useInView({ threshold:0.3 , triggerOnce:true})
 
    const skill=useInView({threshold : 0.1 , triggerOnce:true})
  return (
      <div className='overflow-hidden  flex flex-col items-center justify-center  w-full '>
          <div className=' bg-gradient-to-r from-primary to-second -z-0 w-full h-fit  py-10 pt-[150px]'>
            <Title name="About Me"/>
          </div>

          
          <motion.div 
      
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5,duration:0.5}}
               className='flex flex-col bg-[#fff] -z-0 w-full h-fit py-10'>
          
          <div className=' py-5  mx-5 xl:mx-40 lg:mx-20 sm:mx-10 '>

              <div className='flex flex-row items-center justify-center gap-x-4  mt-5'>
                <div className='w-full h-[2.5px] bg-black opacity-10'></div>
                  <motion.h5 
                    className=' p-2 rounded-lg shadow-sm text-lg  md:text-xl font-bold'
                   ref={ref}
                   animate={ inView? { opacity:1 , y:0}:{opacity:0 , y:-50  }}
                   transition={{duration:0.8}}
                   > Presentation:</motion.h5>
                  <div className='w-full h-[2.5px] bg-black opacity-10'></div>
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
                    <p className='flex justify-start items-center mt-10  w-fit text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms] px-2 py-1 rounded-full'>
                      <button className='font-bold ' >Download CV</button>
                    </p>
                  </div>
              </div>
          </div> 
        <div className=' py-5 flex flex-col justify-center items-center mx-5 xl:mx-40 lg:mx-20 sm:mx-10'>
          <div className='flex flex-row items-center justify-center gap-x-4  mt-5 w-full'>
              <div className=' w-full h-[2.5px] bg-black bg-opacity-10'></div>
              <motion.h5 
                    className=' p-2 rounded-lg shadow-sm text-lg  md:text-xl font-bold'
                   ref={skill.ref}
                   animate={ skill.inView? { opacity:1 , y:0}:{opacity:0 , y:-30 }}
                   transition={{duration:0.7}}
                   > Skill:
              </motion.h5>
              <div className='w-full h-[2.5px] bg-black bg-opacity-10'></div>
          </div>
              <div className='pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-7 lg:gap-14 items-center justify-center  w-full'>
                <CircleProgress  Percent="65" time={30} name="Photoshop" />
                <CircleProgress Percent="80" time={30} name="React  " />
                <CircleProgress Percent="76" time={30} name="Python" />
                <CircleProgress Percent="76" time={30} name="SQL" />
                <CircleProgress Percent="76" time={30} name="Framer " />
                
              </div>
              
        </div>
         
          </motion.div>
         

         <Footer/>
    </div>
    
  )
}

export default Aboutus

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
      <div className="flex flex-col justify-center items-center gap-y-5">
        <div className='flex flex-col  justify-center items-center relative'>
        <div className="outer " style={{}}>
  
        </div>
        <svg  width={dimention} height={dimention} viewBox={`0 0 ${dimention} ${dimention}`} className='absolute'>
          <circle cy={dimention/2} cx={dimention/2} r={radius} strokeLinecap='round' className='backgroud stroke-gray-100'  >
  
          </circle>
          <motion.circle cy={dimention/2} cx={dimention/2} r={radius}  strokeLinecap='round' className='fill-none  stroke-primary stroke-[15px]' ref={ref}
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
        
      <div className=' h-fit w-fit px-2 py-1 shadow-md rounded-md font-semibold '>{name}</div>
      </div>
  
      </div>
      
    )
  }