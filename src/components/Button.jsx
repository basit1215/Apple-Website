import React from 'react'

const Button = ({name }) => {
  return (
    <div >
     <button className=' px-3 py-1 rounded-full h-[45px] w-[130px] bg-[#0071e3]    text-white '>{name}</button>
 </div> 
 )
}

export default Button