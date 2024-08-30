import React,{useRef,useState} from 'react';
import './Navbar.css'
import Home from '../Home/Home';
import Services from '../Service/Service';
import Calls from '../Calls/Calls';
import Portofolios from '../Portofolio/Portofolio';
import Aboutus from '../Apropos/Aboutus';
import Blocs from '../Bloc/Bloc';
import {AnimatePresence, motion,useInView, useScroll, useMotionValueEvent,useTransform} from 'framer-motion';
import { Contenues, Icones } from '../../Donnees/Listes_images';
import MobMenu from '../../Petites_cpt/Mobile_menu/mobileMenu';
import Button from '../../Petites_cpt/Button/Button';

import { Link,NavLink, Outlet } from 'react-router-dom';

//liste menu
const Listes=[
    "Accueil",
    "A propos",
    "Services",
    "Projets",
    "Blog"
  ];


// trois bar
const Tribar=({ani})=>{
    return(
        <motion.div className=' flex flex-col justify-center items-center  gap-y-1.5'>
            <AnimatePresence>
            <motion.span
            animate={ani ?{rotate:-35,transformOrigin:" right"}:{rotate:0,transformOrigin:" right"}}
            transition={{duration:0.3}}
            className='h-[3px] w-[32px] bg-black'></motion.span>
            <motion.span
            animate={ani    ? {opacity:0,width:"0px"}:{opacity:1,width:"32px"}}
            transition={{duration:0.3}}
            className='h-[3px]  bg-black'></motion.span>
            <motion.span
            animate={ani    ? {rotate:35,transformOrigin:" right  "}:{rotate:0,transformOrigin:" right "}}
            transition={{duration:0.3}}
            className='h-[3px] w-[32px] bg-black'></motion.span>
            </AnimatePresence>
           
        </motion.div>
    )
}

// composant menuliste

const Menu =({hov,setHov,liste})=>{
    return(

    <motion.div 
        /*bg-gradient-to-r from-slate-500 to-black text-fill-transparent bg-clip-text */
        onHoverStart={()=>setHov(true)}
        onHoverEnd={()=>setHov(false)}
        className='relative h-fit w-fit'  >
            
        <motion.a 
        animate={hov  ?{opacity:1 ,color:"#099fe3"}:{opacity:0.6}}
        
        href='#' className='taille     '> {liste}</motion.a>
        <motion.p 
            animate={hov  ?{width:"100%",left:"0"}:{width:"0",left:"50%"}}
        className=' absolute h-[20px] border-b-2 border-[#099fe3]  -mt-4 '></motion.p>
    </motion.div>
    )
}



function Navbar() {
    //
    const [lismenuH,setLismenuH]=useState(false)
    const [lismenuA,setLismenuA]=useState(false)
    const [lismenuS,setLismenuS]=useState(false)
    const [lismenuP,setLismenuP]=useState(false)
    const [lismenuB,setLismenuB]=useState(false)

       //
       const [activeH,setActiveH]=useState(false)
       const [activeA,setActiveA]=useState(false)
       const [activeS,setActiveS]=useState(false)
       const [activeP,setActiveP]=useState(false)
       const [activeB,setActiveB]=useState(false)

    //
    const refeH =useRef(null)
    const ivH=useInView(refeH,{amount:0.1})
    //
    const refeS =useRef(null)
    const ivS=useInView(refeS,{amount:0.1})
    //
    const refeP =useRef(null)
    const ivP=useInView(refeP,{amount:0.1})
    //
    const refeA =useRef(null)
    const ivA=useInView(refeA,{amount:0.1})
    //
    const refeB =useRef(null)
    const ivB=useInView(refeB,{amount:0.1})


    ////
    const [bar,setBar]=useState(false)
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll();
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > lastScrollY) {
        // Scroll vers le bas
        setIsVisible(false);
        } else {
        // Scroll vers le haut
        setIsVisible(true);
        }
        setLastScrollY(latest);
  });
   
  return (
    <header className=' '>
        <motion.div 
         initial={{ y: 0 }}
         animate={{ y: isVisible ? 0 : '-100%' }}
         transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        
        //initial={}
        
        //exit={{height:"fit bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 "}}
        className={`  fixed top-0 z-[1000]  flex  w-full   bg-[#fff] border-b-[1px] border-[#099fe3] border-opacity-50 shadow-md   `}>
           <motion.div 
           /* pour faire defiler la bar de navigation sur inteface mobile*/
            animate={bar?{height:"60vh"}:{height:"100px"}}
            transition={{duration:0.5}}
           className=' w-full '>
                <div className='z-40  flex flex-row justify-between items-center   mx-5 xl:mx-40 lg:mx-20 sm:mx-10 my-8  '>
                       
                        <NavLink  onClick={()=>setBar(false)} to="/" className=' w-[100px] '>
                            <img src={Contenues[0]} alt=" aa"  className=' object-cover '/>
                        </NavLink>
                        {/* liste menu */}
                        <nav className=' hidden lg:flex flex-row gap-x-7 '>
                           <NavLink to="/" className={({isActive})=>(isActive? setLismenuH(true):setLismenuH(false))}><Menu hov={lismenuH} setHov={setLismenuH} liste={Listes[0]} /></NavLink>
                           <NavLink to="/About" className={({isActive})=>(isActive? setLismenuA(true):setLismenuA(false))}> <Menu hov={lismenuA} setHov={setLismenuA} liste={Listes[1]}  /> </NavLink>
                           <NavLink to="/Services" className={({isActive})=>(isActive? setLismenuS(true):setLismenuS(false))}> <Menu hov={lismenuS} setHov={setLismenuS} liste={Listes[2]}  /> </NavLink>
                           <NavLink to="/Projets" className={({isActive})=>(isActive? setLismenuP(true):setLismenuP(false))}> <Menu hov={lismenuP} setHov={setLismenuP} liste={Listes[3]} /> </NavLink>
                           <NavLink to="/Blog" className={({isActive})=>(isActive? setLismenuB(true):setLismenuB(false))}> <Menu hov={lismenuB} setHov={setLismenuB} liste={Listes[4]} /> </NavLink>
                           
                        </nav>
                        <NavLink to="/Calls" 
                        className={({isActive})=> (isActive?"hidden lg:flex  p-1 w-[140px] rounded-full   justify-center taille bg-gradient-to-r ring-opacity-100    from-[#099fe3] to-[#644795] ring-[#ffffff] text-white duration-[600ms]":"hidden lg:flex  p-1 w-[140px] rounded-full   justify-center taille  text-[#099fe3]  ring-1 ring-opacity-30 ring-[#099fe3] hover:bg-gradient-to-r hover:ring-opacity-100    hover:from-[#099fe3] hover:to-[#644795]  hover:ring-[#ffffff] hover:text-white hover:duration-[600ms]")}>
                            <button >
                            Contacter-moi
                            </button>
                            
                        </NavLink>
                        <div  
                        className='lg:hidden cursor-pointer'
                        onClick={()=>setBar(!bar)}
                        >
                            <Tribar ani={bar}/>
                            
                        </div>
               
                    </div>
                    
                    <div >
                        <div>
                                
                                <MobMenu bar={bar} setBar={setBar}/>
                                  
                        </div>
                    </div>

            </motion.div>
        
        
           
           
        </motion.div>
        <Outlet/>
        
    </header>
  )
};
 
export default Navbar