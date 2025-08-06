import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryDisplay from '../components/CountryDisplay'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,capital,area,languages,flags')
      .then(response => setCountries(response.data))
  }, [])

  const filtered = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <CountryDisplay countries={filtered}  filter={filter}/>
    </div>
  )
}

export default App