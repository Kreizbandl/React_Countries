/* import React from 'react'; */
import './Countries-list.css';
/* import CountryCard from '../Country-card/Country-card'; */
import jsonCountries from '../countries.json';

function CountriesList () {

    //sort countries
    const sortedJsonCountries = jsonCountries.sort((a,b) => {
        return a.name.common.localeCompare(b.name.common);
    })

    //create cards foreach
    const countries = sortedJsonCountries.map((country, index) => {
        return (
            <a href="/" className="card" key={index}>
                <h2>{ country.name.common }</h2>
                <img alt={ country.flags.alt } src={ country.flags.png }></img>
            </a>
        )
    })

    //display cards in bigger container
    return(
        <div className="countries-list">
            <h1>CountriesList</h1>
            <div className="country-cards">{ countries }</div>
        </div>
    )
}

export default CountriesList;