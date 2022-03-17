import React, { FC, useState, useEffect } from 'react'
import { WeatherItem } from './component/WeatherItem'
import { Weather, WeatherLocation } from '../../lib/types'
import { getWeather, getForecast } from '../../lib/fetchWeather'

interface Props {
    location: WeatherLocation | undefined
}

export const WeatherOverview: FC<Props> = ({ location }) => {
    const [weather, setWeather] = useState<Weather | null>(null)
    const [forecast, setForecast] = useState<Weather[] | null>(null)
    console.log('location in weatheroverview', location)
    useEffect(() => {
        ;(async function () {
            if (location) {
                const [weather, forecast] = await Promise.all([
                    getWeather(location.id),
                    getForecast(location.id),
                ])
                setWeather(weather)
                setForecast(forecast)
            }
        })()
    }, [location])

    if (!location || !weather || !forecast) return null

    return (
        <div>
            <h2>{location.name}</h2>
            <h1>Current Weather</h1>
            <WeatherItem weather={weather} />
            <h2>Forecast</h2>
            <div>
                <ul style={{ whiteSpace: 'nowrap' }}>
                    {forecast.map((item) => (
                        <li key={item.dt}>
                            <WeatherItem weather={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WeatherOverview
