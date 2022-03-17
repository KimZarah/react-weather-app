import { WeatherLocation } from './types'
import { Weather } from './types'

const key = process.env.REACT_APP_API_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5'

export async function searchLocation(
    term: string
): Promise<WeatherLocation | undefined> {
    const result = await fetch(`${baseUrl}/weather?q=${term}&appid=${key}`)
    console.log('in searchlocation')
    console.log('key', key)
    if (result.status === 404) return undefined
    if (result.status !== 200) throw new Error('Failed to read location data')

    return await result.json()
}

export async function getWeather(locationId: number): Promise<Weather> {
    const current = await fetch(
        `${baseUrl}/weather?id=${locationId}&appid=${key}&units=metric`
    )

    if (current.status !== 200) throw new Error('Failed to read location data')

    return await current.json()
}

export async function getForecast(locationId: number): Promise<Weather[]> {
    const forecast = await fetch(
        `${baseUrl}/forecast/?id=${locationId}&appid=${key}&units=metric&cnt=8`
    )

    if (forecast.status !== 200) throw new Error('Failed to read location data')

    return (await forecast.json()).list
}

export function getIconUrl(code: string): string {
    return `http://openweathermap.org/img/wn/${code}.png`
}
