import React from 'react'
import apple from '../assets/apple.mp4'

const Video = () => {
    return (
        <div className=' w-[105%] h-[597px] bg-black p-[0px]   '>
            <video src={apple} autoPlay loop muted className=' w-[105%] h-[580px] px-[150px] pb-[70px] ' ></video>
        </div>
    )
}

export default Video