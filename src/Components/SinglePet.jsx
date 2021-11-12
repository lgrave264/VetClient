import React, {useState} from 'react'

const SinglePet = ({data, setSelectedPet}) => {
    const {age, biography, breed, coloring, gender, images, likesCats, likesDogs, name, pounds} = data;

    return (
        <div className='singlePet' onClick={() => {setSelectedPet(-1)}}>
            <div className='singlePetInfo'>
                <div className='petImg'>

                </div>
                <div className='petInfo'>
                    <h1>{name}</h1>
                    <h2>{breed}</h2>
                    <h2>{age} months old</h2>
                    <h2>{pounds}lbs</h2>
                    <h2>{coloring}</h2>
                </div>
                <div className='bio'>
                    <h4>{biography.en[0].children[0].text}</h4>
                </div>
                <div className='importantNotes'>
                    <ul>
                        <li><h3>Is {gender}</h3></li>
                        <li><h3>{(likesCats) ? 'Friendly with cats' : 'Unfriendly with cats'}</h3></li>
                        <li><h3>{(likesDogs) ? 'Friendly with dogs' : 'Unfriendly with dogs'}</h3></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SinglePet
