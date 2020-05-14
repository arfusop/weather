import React, { useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from '../helpers/state/reducer'
import { LOCATION, LOADING } from '../helpers/state/types'
import AutoComplete from './autocomplete'
import Loader from './loader'
import Search from './search'

const App = () => {
    const [mounted, setMounted] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (!mounted) {
            const handlePositionSuccess = position => {
                const { latitude, longitude } = position.coords

                dispatch({
                    type: LOCATION,
                    payload: {
                        data: { lat: latitude, long: longitude },
                        label: LOCATION
                    }
                })
                // 2. Dispatch an action that triggers the weather API call based on users location

                // example for my location API call:
                // https://api.darksky.net/forecast/1bd704b5c1758006d72f10d0e9e86dc5/40.8199635,-73.9832809

                // dispatch({
                //     type: LOADING,
                //     payload: { label: LOADING, data: false }
                // })
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

    const { loading } = state

    return (
        <div>
            <div>The new non shitty weather app</div>
            {loading ? <Loader /> : null}
            <AutoComplete />
            <Search />
        </div>
    )
}

export default App
