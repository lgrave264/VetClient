import React, {useEffect, useState} from 'react'
import Small from './Small'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';

const Navbar = () => {
    const [size, setSize] = useState(window.innerWidth);

const checkSize = () => {
    setSize(window.innerWidth);
};

useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
}, []);

const [toggle, setToggle] = useState(false);

    if(size < 558.40){
        return(
            <header>
                <ul className='navbar'>
                    <li id='title2'>CODING</li>
                    <li><button onClick={() => setToggle(!toggle)}id='menu'><AiOutlineMenu size={20} color={'lightblue'}/></button></li>
                </ul>
                <Small toggle={toggle}/>
            </header>
        )
    }else{
        return (
            <header>
                <ul  className='navbar'>
                    <li id='title'>CODING</li>
                    <li className='links'><a href="#">Homepage</a></li>
                    <li className='links'><a href="#">West-Mec</a></li>
                    <li className='links'><a href="#">Vet-Program</a></li>
                    <li className='links'><a href="#">Pets</a></li>
                    <li className='links'><a href="#">About</a></li>
                </ul>
            </header>
        )
    }
}

export default Navbar
