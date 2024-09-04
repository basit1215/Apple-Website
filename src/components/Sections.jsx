import React from 'react'
import Button from './Button'
import Video from './Video'
import Img from './img'
import Card from './Card'
import MacBook from '../assets/Macbook.jpg'
import iPad from '../assets/ipad pro.jpeg'
import Intelligence from '../assets/Apple intelligence.jpeg'
import Watch from '../assets/Apple watch.webp'
import Cards from '../assets/Apple card.jpeg'
 
const Sections = () => {
    return (
        <div className='container'>

            <div className=' w-[1285px]'>
                <Video />
                <div className='absolute text-white top-[430px] mx-[463px]  '>
                    <h1 className='font-arial text-[50px] font-bold text-center   leading-[60px]'>Apple Event</h1>
                    <p className='font-arial text-[28px] text-center font-normal  '>Watch online on 9/9 at 10 a.m. PT.</p>
                    <div className='mx-[145px] mt-[18px]  bg-blue-600  text-white  hover:bg-blue-500 rounded-full '>
                        <Button name="Learn more" className="   " />
                    </div>
                </div>
            </div>
            <br />
            <div className=' w-[1285px]'>
                <Img />
                <div className='absolute text-white top-[730px] mx-[390px]   '>
                    <h1 className='font-arial text-[50px] font-bold text-center   leading-[70px]'>iPhone</h1>
                    <p className='font-arial text-[28px] text-center font-normal leading-[32px]' >Our most powerful cameras yet. <br />
                        Ultrafast chips. And USB-C.</p>
                    <div className='mx-[145px] mt-[18px]  flex gap-5 '>
                        <div className=' bg-blue-600  text-white  hover:bg-blue-500 rounded-full'>
                            <Button name="Learn more" className="leading-[18px] " />
                        </div>
                        <div className=' bg-black  text-blue-500 border border-blue-500  hover:bg-blue-600 hover:text-white  rounded-full'>
                            <Button name="Shop iPhone" className="leading-[18px] hover:bg-black " />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Card name="MacBook Air" para="Lean. Mean. M3 machine." url={MacBook} alt="MacBook" />
                </div>
                <div>
                    <Card name="iPad Pro" para="Unbelievably thin. Incredibly powerful." url={iPad} alt="ipad" />
                </div>
            </div>
            <div>
                <div>
                    <Card name="Apple Intelligence" para="AI for the rest of us." url={Intelligence} alt="Intelligence" />
                </div>
                <div>
                    <Card name="Watch" para=" Samrter. Brighter. Mightier" url={Watch} alt="Watch" /> 
                    <p>SERIES 9</p>
                </div>
            </div>
            <div>
                <div>
                    <Card name="Card" para="Get up to 3% Daily cash back with every purchase." url={Cards} alt="Card" />
                </div>
                <div>
                    <Card name="MacBook Air" para="Lean. Mean. M3 machine." url={MacBook} alt="MacBook" />
                </div>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Sections