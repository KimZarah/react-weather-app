import React, { useState, useEffect } from 'react'
import '../styles/index.css'
import Search from '../components/Search/Search'
import WeatherOverview from '../components/WeatherOverview/WeatherOverview'
import { searchLocation } from '../lib/fetchWeather'
import { WeatherLocation } from '../lib/types'

const Home = () => {
    const [location, setLocation] = useState<WeatherLocation>()
    const [searchQuery, setSearchQuery] = useState<string>('')

    useEffect(() => {
        if (!searchQuery) return
        searchLocation(searchQuery).then((data: any) => {
            console.log('data', data)
            setLocation(data)
        })
    }, [searchQuery])

    return (
        <div className="container">
            <h1>Weather App</h1>
            <Search onChange={setSearchQuery} />
            <WeatherOverview location={location} />
        </div>
    )
}

export default Home
