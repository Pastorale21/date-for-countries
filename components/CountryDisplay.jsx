import { useEffect, useState } from 'react'
import CountryDetails from './CountryDetails'
import Weather from './Weather'

const CountryDisplay = ({ countries, filter }) => {
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        setSelectedCountry(null)
    }, [countries])

    if (filter === '') return null

    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    if (countries.length > 1) {
        return (
            <div>
                <ul>
                    {countries.map(country => (
                        <li key={country.name.common}>
                            {country.name.common}{' '}
                            <button onClick={() => setSelectedCountry(country)}>show</button>
                        </li>
                    ))}
                </ul>
                {selectedCountry && <CountryDetails country={selectedCountry} />}
            </div>
        )
    }

    if (countries.length === 1) {
        return <CountryDetails country={countries[0]} />
    }

    return null
}

export default CountryDisplay