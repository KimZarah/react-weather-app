import React, { FC, useState, useEffect } from 'react'
import { WeatherItem } from './component/WeatherItem'
import { CurrentItem } from './component/CurrentItem'
import { Weather, WeatherLocation } from '../../lib/types'
import { getWeather, getForecast } from '../../lib/fetchWeather'

interface Props {
    location: WeatherLocation | undefined
}

export const WeatherOverview: FC<Props> = ({ location }) => {
    const [weather, setWeather] = useState<Weather | undefined>(undefined)
    const [forecast, setForecast] = useState<Weather[] | undefined>(undefined)
    useEffect(() => {
        const fetchData = async () => {
            if (location) {
                const [weather, forecast] = await Promise.all([
                    getWeather(location.name),
                    getForecast(location.name),
                ])
                setWeather(weather)
                setForecast(forecast)
            }
        }
        fetchData().catch(console.error)
    }, [location])

    if (!location || !weather || !forecast) return null

    return (
        <div className="w-full px-1">
            <h2>{location.name}</h2>
            <h3>Current Weather</h3>
            <div className="p-1 my-2 bg-white flex flex-row shadow-lg rounded-lg overflow-hidden">
                <CurrentItem weather={weather} />
            </div>
            <h3>Forecast</h3>
            <div>
                <ul className="lg:flex lg:flex-wrap justify-between">
                    {forecast.map((item, index) => {
                        return (
                            index <= 5 && (
                                <li
                                    className="p-1 mb-4 bg-white flex lg:w-[calc(33%-1rem)] flex-col shadow-lg rounded-lg overflow-hidden"
                                    key={item.dt}
                                >
                                    <WeatherItem weather={item} />
                                </li>
                            )
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default WeatherOverview
