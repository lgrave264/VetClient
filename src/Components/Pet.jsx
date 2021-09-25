import React from 'react'

const Pet = ({data}) => {
    const {img, name, breed, age} = data;

    return (
        <div className='pet'>
            <div id='img'>
                <img src={img} alt={name} />
            </div>
            <div id='info'>
                <div>
                    <h1>{name}</h1>
                    <h1>{age}</h1>
                </div>
                <h2>{breed}</h2>
            </div>
        </div>
    )
}

export default Pet