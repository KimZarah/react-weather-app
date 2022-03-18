import { FC } from 'react'
import { Weather } from '../../../lib/types'
import WeatherIcon from './WeatherIcon'

type Props = {
    weather: Weather
}

export const CurrentItem: FC<Props> = ({ weather }) => {
    console.log(weather, 'weather in currentitem')
    return (
        <div className="container flex p-1 justify-around flex-col lg:flex-row">
            <div className={'flex flex-col items-center p-2'}>
                <WeatherIcon current code={weather.weather[0].id} />
                <strong className="text-[4rem] leading-tight text-darkgrey ">
                    {Math.round(weather.main.temp)}°C
                </strong>
            </div>

            <div className="flex flex-col justify-center p-2">
                <h2 className="!text-petrolblue">Current Information</h2>
                <ul>
                    <li>Feels like: {Math.round(weather.main.feels_like)}°C</li>
                    <li>
                        Max. Temperature:{' '}
                        <span className="text-orangepink">
                            {Math.round(weather.main.temp_max)}°C
                        </span>
                    </li>
                    <li>
                        Min. Temperature:{' '}
                        <span className="text-petrolblue">
                            {Math.round(weather.main.temp_max)}°C
                        </span>
                    </li>
                    <li>Humidity: {weather.main.humidity}%</li>
                    <li>{weather.weather[0].description}</li>
                </ul>
            </div>
        </div>
    )
}

export default CurrentItem
