import { UPDATE_WEATHER, SET_LOADING } from '../../types/app'

export const getDateTime = unix => {
    const date = new Date(unix * 1000)
    return date
}

export const getWeather = (lat, long) => async dispatch => {
    dispatch({ type: SET_LOADING, payload: true })
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const api = `https://api.darksky.net/forecast/${process.env.REACT_APP_SECRET}/${lat},${long}`
    const url = proxy + api

    try {
        let res = await fetch(url)
        res = await res.text()
        res = JSON.parse(res)
        const sunrise = getDateTime(res.daily.data[0].sunriseTime)
        const sunset = getDateTime(res.daily.data[0].sunsetTime)
        res.sunrise = sunrise
        res.sunset = sunset
        dispatch({ type: UPDATE_WEATHER, payload: res })
        dispatch({ type: SET_LOADING, payload: false })
    } catch (error) {
        console.log(error)
    }
}
