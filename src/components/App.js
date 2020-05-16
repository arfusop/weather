import React, { useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from '../helpers/state/reducer'
import { LOCATION, LOADING, UPDATE_WEATHER } from '../helpers/state/types'
import { getWeather } from '../helpers/state/actions'
import AutoComplete from './autocomplete'
import Loader from './loader'

const App = () => {
    const [mounted, setMounted] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (!mounted) {
            const handlePositionSuccess = position => {
                console.log(position)
                const { latitude, longitude } = position.coords

                dispatch({
                    type: LOCATION,
                    payload: {
                        data: { lat: latitude, long: longitude },
                        label: LOCATION
                    }
                })
                const getWeatherData = async () => {
                    const weatherData = await getWeather(latitude, longitude)

                    dispatch({
                        type: LOADING,
                        payload: { label: LOADING, data: false }
                    })
                    dispatch({
                        type: UPDATE_WEATHER,
                        payload: { data: weatherData }
                    })
                }
                getWeatherData()
            }
            const handlePositionError = () => {
                dispatch({
                    type: LOADING,
                    payload: { label: LOADING, data: false }
                })
                console.log('location couldnt be obtained')
                // Dispatch an action that displays the alert letting the user know their location wasnt obtained and they need to manually search for their desired weather location
            }

            const getUserLocation = () => {
                dispatch({
                    type: LOADING,
                    payload: { label: LOADING, data: true }
                })
                navigator.geolocation.getCurrentPosition(
                    handlePositionSuccess,
                    handlePositionError
                )
            }
            getUserLocation()
            setMounted(true)
        }
    }, [mounted, setMounted])

    // const updateGeolocation = (address, lat, long) => {
    //     console.log('address: ', address)
    //     console.log('lat: ', lat)
    //     console.log('long: ', long)
    // }

    const { loading } = state

    return (
        <div>
            {loading ? <Loader /> : null}
            <AutoComplete />
        </div>
    )
}

export default App
