import { useParams } from 'react-router-dom';
import './Country-detail.css';
import jsonCountries from '../countries.json';

function CountryDetail () {
    const country = useParams();

    return(
        <div className="country-detail">
            <h1>{country.country}</h1>
        </div>
    )
}

export default CountryDetail;