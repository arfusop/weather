import { UPDATE_WEATHER, SET_LOADING } from '../../types/app'

export const getWeather = (lat, long) => async dispatch => {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const api = `https://api.darksky.net/forecast/1bd704b5c1758006d72f10d0e9e86dc5/${lat},${long}`
    const url = proxy + api

    try {
        let res = await fetch(url)
        res = await res.text()
        res = JSON.parse(res)
        dispatch({ type: UPDATE_WEATHER, payload: res })
        dispatch({ type: SET_LOADING, payload: false })
        return res
    } catch (error) {
        console.log(error)
    }
}
