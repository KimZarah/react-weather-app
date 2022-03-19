import { useState, useEffect } from 'react'
import '../styles/index.css'
import Search from '../components/Search/Search'
import WeatherOverview from '../components/WeatherOverview/WeatherOverview'
import { WeatherLocation } from '../lib/types'
import { Weather } from '../lib/types'
import { getWeather } from '../lib/fetchWeather'

const Home = () => {
    const [location, setLocation] = useState<WeatherLocation | undefined>()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [showError, setShowError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const checkLocation = () => {
        setIsLoading(true)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function (position) {
                if (position) {
                    const location = await getWeather({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    })
                    setLocation(
                        location
                            ? {
                                  id: location.id,
                                  name: location.name,
                                  coord: {
                                      lat: position.coords.latitude,
                                      lng: position.coords.longitude,
                                  },
                              }
                            : undefined
                    )
                    setIsLoading(false)
                }
            })
        } else {
            alert('Geolocation is not supported by this browser.')
        }
    }

    useEffect(() => {
        if (!searchQuery) return
        getWeather(searchQuery).then((data: Weather | undefined) => {
            setLocation(data)
            if (data === undefined || data.cod === '404') {
                setShowError(true)
            }
        })
    }, [searchQuery])

    return (
        <div className="container xl:w-1/2 p-2 m-auto">
            <h1 className="text-center">React Weather App</h1>
            <div className="relative w-full m-auto flex flex-col items-center">
                <Search
                    onSearchChange={setSearchQuery}
                    onRequestLocation={checkLocation}
                />
                {isLoading && (
                    <div className="m-4 animate-loading inline-block w-12 h-12 rounded-full border-2 border-white/30 border-t-white" />
                )}
            </div>
            {location ? (
                <WeatherOverview location={location} />
            ) : showError ? (
                <p className="text-center">
                    No results found please try again.
                </p>
            ) : null}
        </div>
    )
}

export default Home
