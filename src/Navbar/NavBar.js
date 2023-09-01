import React from 'react';
import './NavBar.css';

function NavBar () {
    return(
        <nav className='NavBar'>
            <a href='/'>
                <img alt="logo" src='../logo.png'/>
            </a>

            <ul>
                <li>
                    <a href='/countries-list'>All Countries</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
        /* <div className='NavBar'>
            <a href='#'>
                <img alt="logo" src='../logo.png'/>
            </a>

                <input/>
                <button>Search</button>
                <button>All Countries</button>
                <button>Contact</button>
            
        </div> */
    )
}

export default NavBar;