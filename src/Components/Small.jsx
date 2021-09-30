import React from 'react';

const Small = ({toggle}) => {
        if(toggle){
            return(
                <div className='small'>
                    <div className='divlinks2'>
                        <ul className='links2'>
                            <li><a href='#'>HomePage</a></li>
                            <li><a href='#'>West-Mec</a></li>
                            <li><a href='#'>Vet-Program</a></li>
                            <li><a href='#'>Pets</a></li>
                            <li><a href='#'>About</a></li>
                        </ul>
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
}

export default Small
