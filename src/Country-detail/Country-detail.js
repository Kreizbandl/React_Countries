import { useParams } from 'react-router-dom';
import './Country-detail.css';
import jsonCountries from '../countries.json';

function CountryDetail() {
    const countryName = useParams();

    /* Finden der Länderinformationen mittels Suchbegriff */
    const country = jsonCountries.find(country => country.name.common === countryName.countryName);
    /* Setzt alternativen Text falls nicht vorhanden */
    if (!country.flags.alt) {
        country.flags.alt = 'Flag of country ' + country.name.common
    }

    return (
        <div className="country-detail">
            {/* Informationen eines Landes mit Bild mit alternativem Text */}
            <h1>{country.name.common}</h1>
            <img alt={country.flags.alt} src={country.flags.png}></img>
            <p>Population: {country.population}</p>
        </div>
    )
}

export default CountryDetail;