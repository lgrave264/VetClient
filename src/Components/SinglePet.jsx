import React, {useState} from 'react'

const SinglePet = ({data}) => {
    const {age, biography, breed, coloring, gender, male, images, likesCats, likesDogs, name, pounds, species} = data;

    return (
        <div className='singlePet'>
            {
                age
            }
        </div>
    )
}

export default SinglePet
