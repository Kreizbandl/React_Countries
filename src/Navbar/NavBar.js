import React from 'react';
import './NavBar.css';
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <>
            {/* Navigationsmenü */}
            <nav className='NavBar'>
                {/* Logo-Link mit beschreibendem Label und alternativem Text */}
                <Link className='logo-link' to="/">
                    <img alt="Logo of the website all-countries" src='../logo.png' />
                </Link>
                <ul>
                    <li>
                        {/* Eingabefeld für die Suche mit beschreibendem Label und auslösbar über die Enter-Taste */}
                        <input type="text" id="search" name="search"
                            aria-label="Enter a country to search for" value={searchTerm}
                            onChange={event => { setSearchTerm(event.target.value); }}
                            onKeyDown={event => {
                                if (event.key === 'Enter' && searchTerm) {
                                    navigate(`/countries-list/${searchTerm}`)
                                }
                            }}
                        />
                        {/* Link zum Auslösen der Suche mit beschreibendem Label */}
                        <Link to={searchTerm ? `/countries-list/${searchTerm}` : null} id="search-button"
                            aria-label="Search for Countries">Search</Link>
                    </li>
                    <li>
                        {/* Link zur Liste alle Länder mit beschreibendem Label */}
                        {/* NavLink achtet auch auf accessibiility,When a NavLink is active it will automatically apply
                         <a aria-current="page"> to the underlying anchor tag. See aria-current on MDN. 
                         (https://reactrouter.com/en/main/components/nav-link) end = exact*/}
                        <NavLink className='nav-link'
                            to='/countries-list' end aria-label="Go to all countries screen">All Countries</NavLink>
                    </li>
                    <li>
                        {/* Link zum Kontaktformular mit beschreibendem Label */}
                        <NavLink className='nav-link'
                            to='/contact' aria-label="Go to the contact form">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            {/* Dynamische Einbindung der Seiten */}
            <Outlet />
        </>
    )
}

export default NavBar;