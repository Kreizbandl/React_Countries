import { useParams } from 'react-router-dom';
import './Country-detail.css';
import jsonCountries from '../countries.json';

function CountryDetail () {
    const countryName = useParams();

    // get corresponding country details
    const x = jsonCountries.find(country => country.name.common === countryName.countryName);
    console.log(x);

    return(
        <div className="country-detail">
            <h1>{ x.name.common }</h1>
            <img alt={x.flags.alt} src={x.flags.png}/>
            <p>Population: { x.population }</p>
        </div>
    )
}

export default CountryDetail;