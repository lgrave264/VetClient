import React, {useState, useEffect} from 'react';
import Pet from './Components/Pet';
import SinglePet from './Components/SinglePet';

function App(){
    const [pets, setPets] = useState([]);

    const sanityClient = require('@sanity/client')
    const client = sanityClient({
        projectId: 'ic8mtd9i',
        dataset: 'production',
        apiVersion: '2021-09-29',
        token:'sk4MXWHOldtFi1kHiI5xTMmE1yDOYZHyKWQwVDNDWwTpZ5ulKaKBlA9WdRlsXW5tMfj68io7gibcahvmHPOkW8ML9JcDVdIjUrq5WXQDrZSc8gOqTmB3WBP7b8KB8uR56BYcMCsJA7G47jevTMo2cy150yUshcDX2ikKb2UyZOLXHqdY4yb2',
        useCdn: true,
    })

    const query = "*[_type == 'pet']";
    useEffect(()=>{
        client.fetch(query).then((pets) => {
            setPets(pets);
            console.log(pets);
        }).catch((error) => {console.log(error)})
    },[])

    return(
        <>
            <h1 style={{textAlign: 'center'}}>Here are our pets!</h1>
            <hr />
            <div id='pets'>
                {
                    pets.map((pet) => {
                        return <Pet data={pet} key={pet._id} />
                    })
                }
            </div>
            <SinglePet data={pets[0]} />
        </>
    )
}

export default App