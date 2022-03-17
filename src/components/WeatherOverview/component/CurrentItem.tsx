import React, { FC } from 'react'
import { Weather } from '../../../lib/types'
import { getDate } from '../../../utils/getDate'
import WeatherIcon from './WeatherIcon'

type Props = {
    weather: Weather
}

export const CurrentItem: FC<Props> = ({ weather }) => {
    console.log(weather, 'weather in currentitem')
    return (
        <div className="container p-1">
            <div className="flex flex-row p-1">
                <div className={'flex flex-col items-center p-2'}>
                    <WeatherIcon current={true} code={weather.weather[0].id} />
                    <strong className="text-[4rem] leading-tight text-darkgrey ">
                        {Math.round(weather.main.temp)}°C
                    </strong>
                </div>

                <div className="flex flex-col justify-center p-2">
                    <h2 className="!text-petrolblue">Current Information</h2>
                    <ul>
                        <li>
                            Feels like: {Math.round(weather.main.feels_like)}°C
                        </li>
                        <li>
                            Max. Temperature:{' '}
                            {Math.round(weather.main.temp_max)}°C
                        </li>
                        <li>
                            Min. Temperature:{' '}
                            {Math.round(weather.main.temp_max)}°C
                        </li>
                        <li>Humidity: {weather.main.humidity}%</li>
                        <li>{weather.weather[0].description}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CurrentItem
