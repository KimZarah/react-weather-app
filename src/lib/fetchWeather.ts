import { WeatherLocation } from './types'
import { Weather } from './types'

const key = process.env.REACT_APP_API_KEY
const baseUrl = process.env.REACT_APP_API_URL

export async function searchLocation(
    term: string
): Promise<WeatherLocation | undefined> {
    const result = await fetch(`${baseUrl}/weather?q=${term}&appid=${key}`)
    if (result.status === 404) return undefined
    if (result.status !== 200) throw new Error('Failed to read location data')

    return await result.json()
}

export async function getWeather(
    locationId: number | { lat: number; lng: number }
): Promise<Weather> {
    let current

    typeof locationId === 'object'
        ? (current = await fetch(
              `${baseUrl}/weather/?lat=${locationId.lat}&lon=${locationId.lng}&appid=${key}&units=metric`
          ))
        : (current = await fetch(
              `${baseUrl}/weather?id=${locationId}&appid=${key}&units=metric`
          ))

    if (current.status !== 200) throw new Error('Failed to read location data')

    return await current.json()
}

export async function getForecast(
    locationId: number | { lat: number; lng: number }
): Promise<Weather[]> {
    let foreCast

    typeof locationId === 'object'
        ? (foreCast = await fetch(
              `${baseUrl}/forecast/?lat=${locationId.lat}&lon=${locationId.lng}&appid=${key}&units=metric&cnt=8`
          ))
        : (foreCast = await fetch(
              `${baseUrl}/forecast/?id=${locationId}&appid=${key}&units=metric&cnt=8`
          ))

    if (foreCast.status !== 200) throw new Error('Failed to read location data')

    return (await foreCast.json()).list
}
