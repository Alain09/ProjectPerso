import React from 'react'
import './Button.css'
function Button({text}) {
  return (
    <button className='btn p-1 w-[140px] rounded-full  flex justify-center taille'>{text}</button>
  )
}

export default Button