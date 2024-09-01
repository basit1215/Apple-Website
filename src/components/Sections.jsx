import React from 'react'
import Button from './Button'
import Video from './Video'
import Img from './img'

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
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                    {/* <Button />
                    <Button /> */}
                </div>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                    {/* <Button />
                    <Button /> */}
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                    {/* <Button />
                    <Button /> */}
                </div>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                    {/* <Button />
                    <Button /> */}
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                    {/* <Button />
                    <Button /> */}
                </div>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                    {/* <Button />
                    <Button /> */}
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