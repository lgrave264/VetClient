import React from 'react';
import data from './data';
import Pet from './Components/Pet';

function App(){
    const pets = data;

    return(
        <>
            <h1 style={{textAlign: 'center'}}>Here are our pets!</h1>
            <hr />
            <div id='pets'>
                {
                    pets.map((pet) => {
                        return <Pet data={pet} key={pet.id} />
                    })
                }
            </div>
        </>
    )
}

export default App