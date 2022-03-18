export type Coordinates = {
    lat: number
    lng: number
}
export type WeatherLocation = {
    coord: Coordinates
    id: number
    name: string
}

export type WeatherConditions = {
    id: number
    main: string
    description: string
    icon: string
}

export type MainWeatherData = {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

export type Weather = {
    weather: WeatherConditions[]
    main: MainWeatherData
    dt: number
    id: number
    name: string
}
