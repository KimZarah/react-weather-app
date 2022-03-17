import React, { FC } from 'react'
import { Weather } from '../../../lib/types'
import { getIconUrl } from '../../../lib/fetchWeather'
import { getDate } from '../../../utils/getDate'

interface Props {
    weather: Weather
}

export const WeatherItem: FC<Props> = ({ weather }) => (
    <div>
        <div>
            {getDate(weather.dt).toLocaleTimeString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
            })}
        </div>
        <div>
            <strong>{weather.main.temp}°C</strong>
            <div>
                ({weather.main.temp_min}°C / {weather.main.temp_max}°C)
            </div>
        </div>
        <div>Humidity: {weather.main.humidity}%</div>
        {weather.weather.map((condition) => (
            <div key={condition.id}>
                <img src={getIconUrl(condition.icon)} alt={condition.main} />{' '}
                {condition.main} {condition.description}
            </div>
        ))}
    </div>
)

export default WeatherItem
