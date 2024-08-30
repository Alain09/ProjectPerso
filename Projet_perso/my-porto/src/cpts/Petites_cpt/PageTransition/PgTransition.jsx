import React from 'react'
import { animate, motion } from 'framer-motion'

const PageVariantes ={
  initial:{
    opacity:0
  },
  animate:{
   opacity:1
  },
  exit:{
    opacity:0
  }
}
function  PgTransition({children}){
  return( 
    <motion.div
    variants={PageVariantes}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ ease:"easeInOut",
      duration:0.5}}
    >
          {children}
    </motion.div>
    
  )
 
 
}

export default PgTransition