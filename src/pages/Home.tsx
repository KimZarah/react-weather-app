import { useState, useEffect } from 'react'
import '../styles/index.css'
import Search from '../components/Search/Search'
import WeatherOverview from '../components/WeatherOverview/WeatherOverview'
import { WeatherLocation } from '../lib/types'
import { getWeather } from '../lib/fetchWeather'

const Home = () => {
    const [location, setLocation] = useState<WeatherLocation>()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [showError, setShowError] = useState<boolean>(false)

    const checkLocation = () => {
        console.log('checklocation')
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
                }
            })
        } else {
            alert('Geolocation is not supported by this browser.')
        }
    }

    useEffect(() => {
        if (!searchQuery) return
        // getweather with string tryout
        getWeather(searchQuery).then((data: any) => {
            setLocation(data)
            console.log(data, 'data')
            if (data === undefined || data.cod === '404') {
                setShowError(true)
            }
        })
    }, [searchQuery])

    return (
        <div className="container xl:w-1/2 md:p-2 px-1 m-auto">
            <div className="w-full  m-auto flex relative flex-col items-center">
                <h1>React Weather App</h1>
                <Search
                    onSearchChange={setSearchQuery}
                    onRequestLocation={checkLocation}
                />
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
