import React from 'react'
import apple from '../assets/apple.mp4'

const Video = () => {
  return (
    <video src={apple} autoPlay loop muted></video>
  )
}

export default Video