import React from 'react'

const Link = ({name }) => {
  return (
    <>
    <a href="#" className='text-gray-900 text-[13px] py-3 hover:text-black' >{name}</a>
    </>
  )
}

export default Link