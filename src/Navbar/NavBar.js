import React from 'react';
import './NavBar.css';

function NavBar () {

    const [searchTerm, setSearchTerm] = React.useState('');

    return(
        <nav className='NavBar'>
            <a href='/'>
                <img alt="logo" src='../logo.png'/>
            </a>

            <ul>
                <li>
                    <label htmlFor="search">Search: </label>
                    <input type="text" id="search" name="search" value={searchTerm} onChange={event => {
                        setSearchTerm(event.target.value);
                    }}/>
                    
                    {/* TODO add search logic href={'/countries-list/' + searchTerm}  */}
                    <a href="#">Search</a>
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