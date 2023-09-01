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
                    <label for="search">Search: </label>
                    <input type="text" id="search" name="search"/>
                    {/* TODO add search logic */}
                    <a href='/'>Search</a>
                </li>
                <li>
                    <a href='/countries-list'>All Countries</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;