import React from 'react'
import Button from './Button'
import Video from './Video'

const Sections = () => {
    return (
        <div className='container'>

            <div className=' w-[1285px]'>
                <Video className="" />
                <div className='absolute text-white top-[430px] mx-[463px]  '>
                    <h1 className='font-arial text-[50px] font-bold text-center   leading-[60px]'>Apple Event</h1>
                    <p className='font-arial text-[28px] text-center font-normal  '>Watch online on 9/9 at 10 a.m. PT.</p>
                    <div className='mx-[145px] mt-[18px] '>
                    <Button name="Learn more" className="leading-[18px]" />
                    </div>
                </div>
            </div>

            <div>
                <img src="" alt="" />
                <h1></h1>
                <p></p>
                {/* <Button />
                <Button /> */}
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