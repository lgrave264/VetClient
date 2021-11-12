import React from 'react'

const Pet = ({data, setSelectedPet, index}) => {
    const {images, name, breed, age} = data;

    return (
        <div className='pet' onClick={() => {setSelectedPet(index)}}>
            <div id='img'>
                <img src={images[0].asset._ref} alt={name} />
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