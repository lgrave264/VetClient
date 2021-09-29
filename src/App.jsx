import React from 'react';
import data from './data';
import Pet from './Components/Pet';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';

function App(){
    const pets = data;

    return(
        <>
            <Navbar/>
            <About/>
            <hr/>
            <div id='pets'>
                {
                    pets.map((pet) => {
                        return <Pet data={pet} key={pet.id} />
                    })
                }
            </div>
            <Footer/>
        </>
    )
}

export default App