import { FC } from 'react'
import { Weather } from '../../../lib/types'
import { getDate } from '../../../utils/getDate'
import WeatherIcon from './WeatherIcon'

type Props = {
    weather: Weather
}

export const WeatherItem: FC<Props> = ({ weather }) => {
    return (
        <div className="p-2">
            <h4>
                {getDate(weather.dt).toLocaleTimeString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                })}
            </h4>
            <div>
                <div className={'flex'}>
                    {weather.weather.map((condition, index) => (
                        <div
                            className="text-center mr-2"
                            key={index + '-' + condition.id}
                        >
                            <WeatherIcon code={condition.id} />
                            <span> {condition.main}</span>
                        </div>
                    ))}
                    <div className="flex flex-col">
                        <strong>
                            {Math.round(weather.main.temp_min)}°C /
                            {Math.round(weather.main.temp_max)}°C
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherItem
