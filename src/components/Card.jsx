import React from 'react'
import Button from './Button'

const Card = ({url , alt , name , para , className }) => {

 


    return (
        
        <> 
            <div className=' w-[105%] h-[597px] '  >
                <img src={url} alt={alt}   />
            </div>
            <div>
                <h1 style={{className}} >{name}</h1>
                <p>{para}</p>
                <div>
                    <div>
                        <Button name="Learn more" />
                    </div>
                    <div>
                        <Button name="Buy" />
                    </div>
                </div>
            </div>
            </> 
    )
}

export default Card