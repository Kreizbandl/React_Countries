/* import React from 'react'; */
import './Countries-list.css';
import CountryCard from '../Country-card/Country-card';


function CountriesList () {

    const countries = ["aus", "maus", "haus", "straus"];

    let listOfCountries = [];

    countries.forEach((country,index) => {
        listOfCountries.push(
            <div>
                <h1>Name</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/255px-Flag_of_Austria.svg.png"/>
            </div>
        );  
    });

    return(
        <div className="countries-list">
            <h1>CountriesList</h1>
            <div>{ listOfCountries }</div>

        </div>
    )
}

export default CountriesList;