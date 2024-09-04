import React from 'react'
import Button from './Button'

const Card = ({ url, alt,  name, para, }) => {
    return (
        <div>
            <img src={url} alt={alt} />
            <div>
                <h1>{name}</h1>
                <p>{para}</p>
                <div>
                    <div>
                        <Button  name="Learn more" />
                    </div>
                    <div>
                        <Button name="Buy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card