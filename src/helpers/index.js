import { UAParser } from 'ua-parser-js'

export const getUserAgent = () => {
    const parsed = new UAParser()
    const userAgent = parsed.getResult()
    return userAgent
}

export const getWeather = async (lat, long) => {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const api = `https://api.darksky.net/forecast/1bd704b5c1758006d72f10d0e9e86dc5/${lat},${long}`
    const url = proxy + api

    try {
        let res = await fetch(url)
        res = await res.text()
        res = JSON.parse(res)
        return res
    } catch (error) {
        console.log(error)
    }
}
