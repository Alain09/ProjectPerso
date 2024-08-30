import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import *as Yup from "yup";
import './Formulaire.css'
import { motion } from 'framer-motion';



const Shemaformul=Yup.object().shape({
    nom :Yup
        .string()
        .required("le champ est obligatoire")
        .min(3,"minimun trois caractère"),
    prenom:Yup
        .string()
        .required("le prenom est obligatoire")
        .min(3,"minimun trois caractère"),
    email:Yup
        .string()
        .required("le champ est obligatoire")
        .email("l'email n'est pas valide"),
    services:Yup
        .string()
        .required("le champ est obligatoire"),
    description:Yup
        .string()

});

function ConFormulaires({retard=0}) {

    const {handleSubmit,register,formState:{errors,isValid,isSubmitting},reset,setError}=useForm({
        mode:"onTouched",
        resolver:yupResolver(Shemaformul)
    });

    async function Maison(datas){
       try {
        console.log(datas)
        reset()
       }catch{

       }
    };
  return (
    <div className=''>
         <form action="" method='post' onSubmit={handleSubmit(Maison)} className=' flex flex-col gap-y-5  '>
        <div className=' flex flex-col sm:flex-row gap-x-4 gap-y-3'>
            <div 
            
            
            className=' flex flex-col w-full  pb-3  '>
                <motion.input   
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{
                        once:true,
                        
                    }}
                    transition={{delay:retard,duration:0.5}}
                    type='text' name='nom' id='nom' placeholder='taper votre nom' className={ (errors.nom ? "input error" :"input")}
                 {...register('nom')}
                />
                <small className="error">{errors.nom?.message}</small>
            </div>
            <div 
            
            className=' flex flex-col w-full'>
                <motion.input   
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{
                        once:true,
                        
                    }}
                    transition={{delay:retard+0.1,duration:0.5}}
                    type='text' name='prenom' id='prenom' placeholder='taper votre prénom' className={ (errors.prenom ? "input error" :"input")}
                {...register('prenom')}
                />
                <small className="error">{errors.prenom?.message}</small>
            </div>

        </div>

        <div className=' flex flex-col sm:flex-row gap-x-4 gap-y-3'>
            <div className=' flex flex-col w-full  pb-3 '>
                <motion.input   
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{
                        once:true,
                        
                    }}
                    transition={{delay:retard+0.2,duration:0.5}}
                     type='email' name='email' id='email' placeholder='taper votre email' className={ (errors.email ? "input error" :"input")}
                {...register('email')}
                />
                <small className="error">{errors.email?.message}</small>
            </div>
            <div className=' flex flex-col w-full'>
                <motion.input   
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{
                        once:true,
                        
                    }}
                    transition={{delay:retard+0.3,duration:0.5}}
                    type='text' name='services' id='services' placeholder='choisir votre service' className={ (errors.services ? "input error" :"input")}
                {...register('services')}
                />
                <small className="error">{errors.services?.message}</small>
            </div>

        </div>

        <div className=' '>
            <motion.textarea 
                   
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                viewport={{
                    once:true,
                    
                }}
                transition={{delay:retard+0.4,duration:0.5}}
            
                name='description' id='description' placeholder=' dites nous en plus' className='w-full h-[150px] border-none ring-1 ring-gray-400 bg-gray-400 bg-opacity-10  rounded-lg focus:outline-none focus:ring-1 focus:ring-primary
                     border-transparent placeholder:text-gray-600   '
            {...register('description')}
            />
        </div>

        <motion.button 
                 
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                viewport={{
                    once:true,
                   
                }}
                transition={{delay:retard+0.1,duration:0.5}}
            disabled={!isValid || isSubmitting} className=' btns border px-1 py-2 rounded-lg focus:outline-none  text-white '
            
            > envoyer 
        </motion.button>
   </form>
    </div>
  )
};

export default ConFormulaires;