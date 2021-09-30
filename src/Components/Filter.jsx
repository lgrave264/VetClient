import React from 'react'

const Filter = () => {



    return(
        <div id="filterbox">

         <button id=""> </button>

         <div className="slidercomp filtercomp">Age (Insert Slider)</div>

         <button id="gendersl" className="filtercomp">Male<i className="fa fa-mars"></i><input id="gendm" type="radio" name="gendanswer">
             
        </input>Female <i className="fa fa-venus"></i><input id="gendf" type="radio" name="gendanswer" ></input></button> 

         <div ></div>

         <div className="slidercomp filtercomp">Weight (Insert Slider)</div>
         
         <div></div>


          
        </div>

    )

}
 


export default Filter