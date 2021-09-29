import React from 'react'

const SinglePet = (data) => {
    console.log(data);
    const {age, biography, breed, coloring, gender, male, images, likesCats, likesDogs, name, pounds, species} = data.data;

    return (
        <div className='singlePet'>
            {
                age
            }
        </div>
    )
}

export default SinglePet
