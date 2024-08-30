import React from 'react';
import {Icones} from '../../Donnees/Listes_images'
function Footer() {
  return (
    <footer className='flex flex-col bg-[#1b1b1b] -z-0 w-full h-fit  py-5'>
              <div className='mx-5 xl:mx-40 lg:mx-20 sm:mx-10 pt-5  gap-5'>
                  <div className='flex justify-center items-center gap-x-10'>
                  {
                    Icones.map((data)=>(
                       <div key={data.id} className=' p-1 rounded-full bg-white hover:bg-primary cursor-pointer hover:text-white' >
                        <i>{data.cpt}</i>
                       </div>
                     ))
                   }
                  </div>
                  <div className='flex flex-col sm:flex-row justify-center items-center my-5 gap-x-4'>
                    <p className=' text-white text-xl'>email: www.alain090901@gmail.com</p>
                    <p className=' text-white text-xl'> +229 61624396 </p>
                  </div>
                  <div className='flex items-center justify-center gap-x-3 text-white'> copiright 2024  <a href="">Droit d'auteur</a>  </div>
              </div>     
      </footer>
  )
};

export default Footer