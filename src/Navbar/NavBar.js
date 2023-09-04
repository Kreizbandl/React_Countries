import React from 'react';
import './NavBar.css';
import { Outlet, Link } from "react-router-dom";


function NavBar () {

    const [searchTerm, setSearchTerm] = React.useState('');

    return(
        <>
            <nav className='NavBar'>
                <Link to="/">
                    <img alt="logo" src='../logo.png'/>
                </Link>
                

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
                        <Link to='/countries-list'>All Countries</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;