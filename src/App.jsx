import React from 'react';
import data from './data';
import Pet from './Components/Pet';
import Navbar from './Components/Navbar';

function App(){
    const pets = data;

    return(
        <>
            <Navbar/>
            <p></p>
            <hr/>
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