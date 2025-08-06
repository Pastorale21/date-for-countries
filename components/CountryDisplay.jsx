const CountryDisplay = ({ countries,filter }) => {
    if (filter === '') {
        return null // 什么都不显示
    }
    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    if (countries.length > 1) {
        return (
            <ul>
                {countries.map(country => (
                    <li key={country.name.common}>{country.name.common}</li>
                ))}
            </ul>
        )
    }

    if (countries.length === 1) {
        const country = countries[0]
        return (
            <div>
                <h2>{country.name.common}</h2>
                <p><strong>Capital:</strong> {country.capital?.[0]}</p>
                <p><strong>Area:</strong> {country.area}</p>

                <h3>Languages</h3>
                <ul>
                    {Object.values(country.languages).map(lang => (
                        <li key={lang}>{lang}</li>
                    ))}
                </ul>

                <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="200" />
            </div>
        )
    }

    return null
}

export default CountryDisplay