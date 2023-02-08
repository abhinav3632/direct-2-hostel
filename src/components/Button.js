import React from 'react'
import './style.css'

const Button = (props) => {
  return (
    <button id='button' className='text-white font-[Poppins] py-2 px-6 rounded md:ml-8 duration-500'>
      {props.children}
    </button>
  )
}

export default Button
