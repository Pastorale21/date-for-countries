// CountryDetails.jsx
import Weather from './Weather'

const CountryDetails = ({ country }) => {
  const capital = country.capital?.[0]

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Area:</strong> {country.area}</p>

      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        width="150"
      />

      {/* ⛅ 添加天气组件 */}
      {capital && <Weather capital={capital} />}
    </div>
  )
}

export default CountryDetails