import './Countries-list.css';
import { useParams } from 'react-router-dom';
import jsonCountries from '../countries.json';
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


function CountriesList() {
    const searchTerm = useParams();
    var heading = 'All Countries';
    // ref für das erste Element
    const firstElementRef = useRef(null);
    // Zustand, der feststellt, ob das firstElementRef auf ein Element in der Liste verweist
    const [elementSet, setElementSet] = useState(false);

    /* Sortiert Länder alphabetisch */
    var sortedJsonCountries = jsonCountries.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
    })

    /* Setzt alternativen Text falls nicht vorhanden */
    jsonCountries.forEach((country) => {
        if (!country.flags.alt) {
            country.flags.alt = 'Flag of country ' + country.name.common
        }
    });

    /* Zeigt nur die entsprechenden Länder, wenn ein Suchbegriff vorhanden */
    if (searchTerm.searchTerm !== undefined) {
        heading = 'Found Countries for "' + searchTerm.searchTerm + '"';
        var tmpCountries = sortedJsonCountries;
        sortedJsonCountries = [];
        /* Verwende nur passende Länder */
        tmpCountries.forEach(country => {
            if (country.name.common.includes(searchTerm.searchTerm)) {
                sortedJsonCountries.push(country);
            }
        });
        /* Zeigt Fehlermeldung, wenn keine Länder gefunden wurden */
        if (sortedJsonCountries.length === 0) {
            heading = 'Nothing found for "' + searchTerm.searchTerm + '"';
        }
    }


    /* Erstellt eine Karte für jedes Land */
    const countries = sortedJsonCountries.map((country, index) => {
        return (
            /* Link zur Detailansicht des Landes mit Label */
            <Link to={`/country-detail/${country.name.common}`} className="card" key={index}
                aria-label={`Go to detail screen of ${country.name.common}`} ref={(index === 0) ? firstElementRef : null}>
                <h2>{country.name.common}</h2>
                {/* Bild mit alternativem Text */}
                <img alt={country.flags.alt} src={country.flags.png}></img>
            </Link>
        )
    })

    /* Setzt `elementSet` auf `true`, wenn das `firstElementRef`-Objekt auf ein Element in der Liste verweist */
    useEffect(() => {
        if (firstElementRef.current) {
            setElementSet(true);
        }
    }, [firstElementRef]);

    /* Fokus auf das erste Element nach dem Rendern der Ansicht */
    useEffect(() => {
        if (elementSet) {
            firstElementRef.current.focus();
        }
    }, [elementSet]);

    return (
        <div className="countries-list">
            <h1>{heading}</h1>
            <div className="country-cards">{countries}</div>
        </div>
    )
}

export default CountriesList;