import React from 'react'

const About = () => {
    const image = require('../Images/pinal.jpg').default;
    return (
        <div id="about">
            <p id="abouttext">The West.MEC Veterinary Sciences program has a partnership with Pinal County Animal Control to rescue animals. Students work with a veterinarian to spay, neuter and vaccinate the animals to prepare them for adoption.
            <br /><br />
            These four-legged companions are available for adoption and looking for their forever home.
            <br /><br />
            If you are interested in one of our pets, please check out the application to see what we are looking for and when you're ready look at our selection of companions who would love to have a home.
            </p>
            <div id="aboutimgdiv">
                <img id="aboutimg" alt="Pinal County Animal protection" src={image}/>
            </div>
        </div>
    )
}

export default About
