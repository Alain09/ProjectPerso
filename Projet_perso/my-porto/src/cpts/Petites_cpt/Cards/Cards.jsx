import React from 'react'

function Cards( {image}) {
  return (
    <div className=' lg:h-[150px] lg:w-[150px] h-[125px] w-[125px] bg-center bg-cover '>
        <img src={image} alt='ala' className=' object-cover' />
    </div>
  )
}

export default Cards