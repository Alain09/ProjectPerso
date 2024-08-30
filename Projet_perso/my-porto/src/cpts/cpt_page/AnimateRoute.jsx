import React from 'react';
import { Routes,useLocation,Route } from 'react-router-dom';

import Services from './Service/Service';
import Calls from './Calls/Calls';
import Portofolios from './Portofolio/Portofolio';
import Aboutus from './Apropos/Aboutus';
import Blocs from './Bloc/Bloc';
import Home from './Home/Home';
import PgTransition from '../Petites_cpt/PageTransition/PgTransition';
import { motion,AnimatePresence } from 'framer-motion';
function AnimateRoute() {
    const location = useLocation()
  return (
   
        <Routes  location={location} key={location.pathname} >
            <Route path="/" element={ <PgTransition><Home/></PgTransition>}></Route>
            <Route path="/About" element={<PgTransition><Aboutus/></PgTransition>}></Route>
            <Route path="/Services" element={<PgTransition><Services/></PgTransition>}></Route>
            <Route path="/Projets" element={<PgTransition><Portofolios/></PgTransition>}></Route>
            <Route path="/Blog" element={<PgTransition><Blocs/></PgTransition>}></Route>
            <Route path="/Calls" element={<PgTransition><Calls/></PgTransition>}></Route>   
        </Routes>
 
   
  )
}

export default AnimateRoute