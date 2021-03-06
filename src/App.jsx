import React, {useState, useEffect} from 'react';
import Pet from './Components/Pet';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import SinglePet from './Components/SinglePet';
import Filter from './Components/Filter';

const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: 'ic8mtd9i',
    dataset: 'production',
    apiVersion: '2021-09-29',
    token:'sk4MXWHOldtFi1kHiI5xTMmE1yDOYZHyKWQwVDNDWwTpZ5ulKaKBlA9WdRlsXW5tMfj68io7gibcahvmHPOkW8ML9JcDVdIjUrq5WXQDrZSc8gOqTmB3WBP7b8KB8uR56BYcMCsJA7G47jevTMo2cy150yUshcDX2ikKb2UyZOLXHqdY4yb2',
    useCdn: true,
})
const query = "*[_type == 'pet']";

function App(){
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedPet, setSelectedPet] = useState(-1);


    const getPets = async() => {
        return client.fetch(query);
    }

    useEffect(()=>{
        getPets()
            .then((pets) => {
                setPets(pets);
                console.log(pets);
                setLoading(false);
            }).catch((error) => {console.log(error)})
    },[])




    return ( 
        <>
            <Navbar/>
            <About/>

            <Filter></Filter>
            <hr/>
            <div id='pets'>
                
                {
                    pets.map((pet, index) => {
                        return <Pet data={pet} setSelectedPet={setSelectedPet} index={index} key={pet._id} />
                    })

                    
                    
                }
            </div>
            {(!loading && selectedPet > -1) ? <SinglePet data={pets[selectedPet]} setSelectedPet={setSelectedPet} /> : ''}
            <Footer/>
        </>
    )
}

export default App