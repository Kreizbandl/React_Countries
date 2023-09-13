import { useParams } from 'react-router-dom';
import './Countries-list.css';
/* import CountryCard from '../Country-card/Country-card'; */
import jsonCountries from '../countries.json';
import { Link } from "react-router-dom";


function CountriesList () {
    const searchTerm = useParams();
    var heading = 'All Countries';

    //sort countries
    var sortedJsonCountries = jsonCountries.sort((a,b) => {
        return a.name.common.localeCompare(b.name.common);
    })

    // if searchTerm is set only show corresponding countries
    if(searchTerm.searchTerm !== undefined){
        heading = 'Found Countries for ' + searchTerm.searchTerm;
        // tmp variable for matching countries
        var tmpCountries = sortedJsonCountries;
        // empty variable for already sorted countries
        sortedJsonCountries = [];
        // only use correct countries
        tmpCountries.forEach(country => {
            if(country.name.common.includes(searchTerm.searchTerm)){
                sortedJsonCountries.push(country);
            }
        });
        if(sortedJsonCountries.length === 0){
            heading = 'Nothing found for ' + searchTerm.searchTerm;
        }
    }


    //create cards foreach
    const countries = sortedJsonCountries.map((country, index) => {
        return (
            <Link to={`/country-detail/${country.name.common}`} className="card" key={index} aria-label={`Got to detail screen of ${ country.name.common }`}>
                <h2>{ country.name.common }</h2>
                { country.flags.alt ? (
                    <img alt={ country.flags.alt } src={ country.flags.png }></img>
                ) : (
                    <img alt={ 'Flag of country ' + country.name.common } src={ country.flags.png }></img>
                )}
            </Link>
        )
    })

    //display cards in bigger container
    return(
        <div className="countries-list">
            <h1>{ heading }</h1>
            <div className="country-cards">{ countries }</div>
        </div>
    )
}

export default CountriesList;