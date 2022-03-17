import RainyIcon from '../../Icons/weather/Rain'
import CloudyIcon from '../../Icons/weather/Cloudy'
import SunnyIcon from '../../Icons/weather/Sunny'
import HazeIcon from '../../Icons/weather/Haze'
import PartlyCloudIcon from '../../Icons/weather/PartlyCloudy'
import SleetIcon from '../../Icons/weather/Sleet'
import SnowIcon from '../../Icons/weather/Snow'
import ThunderStormIcon from '../../Icons/weather/Thunderstorm'
import HeavyRainIcon from '../../Icons/weather/HeavyRain'

type Props = {
    code: number
    current?: boolean
}

export const WeatherIcon = ({ code, current }: Props) => {
    const currentClass = 'lg:w-48 lg:h-48 animate-zoomInOut'
    const forecastClass = 'animate-zoomInOut'
    switch (code) {
        case 800:
            return (
                <SunnyIcon className={current ? currentClass : forecastClass} />
            )
        case 801:
        case 802:
            return (
                <PartlyCloudIcon
                    className={current ? currentClass : forecastClass}
                />
            )
        case 803:
        case 804:
            return (
                <CloudyIcon
                    className={current ? currentClass : forecastClass}
                />
            )
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
        case 500:
        case 501:
        case 520:
        case 521:
        case 511:
            return (
                <RainyIcon className={current ? currentClass : forecastClass} />
            )
        case 502:
        case 503:
        case 504:
        case 522:
        case 531:
            return (
                <HeavyRainIcon
                    className={current ? currentClass : forecastClass}
                />
            )
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
            return (
                <ThunderStormIcon
                    className={current ? currentClass : forecastClass}
                />
            )
        case 600:
        case 601:
        case 602:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            return (
                <SnowIcon className={current ? currentClass : forecastClass} />
            )
        case 611:
            return (
                <SleetIcon className={current ? currentClass : forecastClass} />
            )
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
        case 781:
            return (
                <HazeIcon className={current ? currentClass : forecastClass} />
            )
        default:
            return (
                <SunnyIcon className={current ? currentClass : forecastClass} />
            )
    }
}

export default WeatherIcon
