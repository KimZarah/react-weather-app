import { Weather } from './types'

const key = process.env.REACT_APP_API_KEY
const baseUrl = process.env.REACT_APP_API_URL

export async function getWeather(
    location: string | { lat: number; lng: number }
): Promise<Weather | undefined> {
    let current

    typeof location === 'object'
        ? (current = await fetch(
              `${baseUrl}/weather/?lat=${location.lat}&lon=${location.lng}&appid=${key}&units=metric`
          ))
        : (current = await fetch(
              `${baseUrl}/weather?q=${location}&appid=${key}&units=metric`
          ))

    if (current.status !== 200) {
        console.error('Failed to read location data')
        return undefined
    }

    return await current.json()
}

export async function getForecast(
    location: string | { lat: number; lng: number }
): Promise<Weather[] | undefined> {
    let foreCast

    typeof location === 'object'
        ? (foreCast = await fetch(
              `${baseUrl}/forecast/?lat=${location.lat}&lon=${location.lng}&appid=${key}&units=metric&cnt=8`
          ))
        : (foreCast = await fetch(
              `${baseUrl}/forecast/?q=${location}&appid=${key}&units=metric&cnt=8`
          ))

    if (foreCast.status !== 200) {
        console.error('Failed to read location data')
        return undefined
    }

    return (await foreCast.json()).list
}
