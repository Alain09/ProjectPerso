import React from 'react';
import "./Principal.css"
import Navbar from './cpt_page/Navbar/Navbar';


import {createBrowserRouter,RouterProvider,BrowserRouter as Router,Route,Routes, useLocation} from "react-router-dom"
import AnimateRoute from './cpt_page/AnimateRoute';

/*const Router=createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>,
    children: [
    
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"About",
        element:<Aboutus/>
      },
      {
        path:"Services",
        element:<Services/>
      },
      {
        path:"Projets",
        element:<Portofolios/>
      },
      {
        path:"Blog",
        element:<Blocs/>
      },
      {
        path:"Calls",
        element:<Calls/>
      }
    ],
    errorElement:<div>je suis</div>
  }
])*/


function Principal() {
  
  return (
    <Router >
      <Navbar/>
      <AnimateRoute/>
    </Router>
     
  )
}

export default Principal