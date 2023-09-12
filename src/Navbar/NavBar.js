import React from 'react';
import './NavBar.css';
import { Outlet, Link, useNavigate } from "react-router-dom";

function NavBar () {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');

    const navigateToSearch = (searchTerm) => {
        navigate(`/countries-list/${searchTerm}`);
    };

    return(
        <>
            <nav className='NavBar'>
                <Link to="/">
                    <img alt="logo" src='../logo.png'/>
                </Link>
                

                <ul>
                    <li>
                        <input 
                            type="text" 
                            id="search" 
                            name="search" 
                            aria-label="Enter a country to search for" 
                            value={searchTerm} onChange={event => {
                                setSearchTerm(event.target.value);
                            }}
                            onKeyDown={event => {
                                if(event.key === 'Enter' && searchTerm){
                                    navigateToSearch(searchTerm);
                                }
                            }}    
                        />

                        <Link to={searchTerm ? `/countries-list/${searchTerm}` : null}>Search</Link>
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