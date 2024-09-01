import React from 'react'
import Button from './Button'
import Video from './Video'

const Sections = () => {
    return (
        <div className='container'>

            <div className=' w-[105%]'>
                <Video className="" />
                <div className='absolute text-white top-[450px]  '>
                    <h1 className='font-arial text-[36px] font-bold '>Apple Event</h1>
                    <p className='font-arial text-[24px]'>Watch on 9/9 at 10 a.m. PT.</p>
                    <Button name="Learn more"  />
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