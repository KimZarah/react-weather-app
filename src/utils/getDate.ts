export function getDate(unixUtc: number): Date {
    // const dateObject = new Date(unixUtc * 1000)
    // const humanDateFormat = dateObject.toLocaleString()
    return new Date(unixUtc * 1000)
}
