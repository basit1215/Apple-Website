import React from 'react'
import Iphone from '../assets/iphone-11pro.jpg'

const Img = () => {
    return (
        <div className=' w-[105%] h-[597px] bg-black p-[0px]  '>
            <img src={Iphone} className='w-[105%] h-[370px] px-[300px]  pt-[70px] absolute top-[892px] ' />
        </div>
    )
}

export default Img