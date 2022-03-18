import { useState, useEffect } from 'react'
import '../styles/index.css'
import Search from '../components/Search/Search'
import WeatherOverview from '../components/WeatherOverview/WeatherOverview'
import { searchLocation } from '../lib/fetchWeather'
import { WeatherLocation } from '../lib/types'

const Home = () => {
    const [location, setLocation] = useState<WeatherLocation>()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [showError, setShowError] = useState<boolean>(false)

    useEffect(() => {
        if (!searchQuery) return
        searchLocation(searchQuery).then((data: any) => {
            console.log('data', data)
            setLocation(data)
            if (data === undefined) {
                setShowError(true)
            }
        })
    }, [searchQuery])

    return (
        <div className="container xl:w-1/2 md:p-2 px-1 m-auto">
            <div className="w-full  m-auto flex relative flex-col items-center">
                <h1>Weather App</h1>
                <Search onChange={setSearchQuery} />
                {location ? (
                    <WeatherOverview location={location} />
                ) : showError ? (
                    <p>No results found please try again.</p>
                ) : null}
            </div>
        </div>
    )
}

export default Home
