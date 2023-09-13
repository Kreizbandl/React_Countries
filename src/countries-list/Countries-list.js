import { useParams } from 'react-router-dom';
import './Countries-list.css';
/* import CountryCard from '../Country-card/Country-card'; */
import jsonCountries from '../countries.json';
import { Link } from "react-router-dom";


function CountriesList () {
    const searchTerm = useParams();
    var heading = 'All Countries';

    /* Sortiert Länder alphabetisch */
    var sortedJsonCountries = jsonCountries.sort((a,b) => {
        return a.name.common.localeCompare(b.name.common);
    })

    /* Zeigt nur die entsprechenden Länder, wenn ein Suchbegriff vorhanden */
    if(searchTerm.searchTerm !== undefined){
        heading = 'Found Countries for ' + searchTerm.searchTerm;
        var tmpCountries = sortedJsonCountries;
        sortedJsonCountries = [];
        /* Verwende nur passende Länder */
        tmpCountries.forEach(country => {
            if(country.name.common.includes(searchTerm.searchTerm)){
                sortedJsonCountries.push(country);
            }
        });
        /* Zeigt Fehlermeldung, wenn keine Länder gefunden wurden */
        if(sortedJsonCountries.length === 0){
            heading = 'Nothing found for ' + searchTerm.searchTerm;
        }
    }


    /* Erstellt eine Karte für jedes Land */
    const countries = sortedJsonCountries.map((country, index) => {
        return (
            /* Link zur Detailansicht des Landes mit Label */
            <Link to={`/country-detail/${country.name.common}`} className="card" key={index} 
                aria-label={`Go to detail screen of ${ country.name.common }`}>
                <h2>{ country.name.common }</h2>
                {/* Bild mit alternativem Text */}
                { country.flags.alt ? (
                    <img alt={ country.flags.alt } src={ country.flags.png }></img>
                ) : (
                    <img alt={ 'Flag of country ' + country.name.common } src={ country.flags.png }></img>
                )}
            </Link>
        )
    })

    return(
        <div className="countries-list">
            <h1>{ heading }</h1>
            <div className="country-cards">{ countries }</div>
        </div>
    )
}

export default CountriesList;