import React from 'react'

const Button = ({name}) => {
  return (
     <button className=' px-3 py-1 rounded-full h-[42px] w-[130px] bg-[#0071e3] mt-8 mr-5  text-white   '>{name}</button>
  )
}

export default Button