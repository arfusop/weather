import React, { useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from '../helpers/state/reducer'
import { LOCATION } from '../helpers/state/types'

const App = () => {
    const [mounted, setMounted] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

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
    }
    const handlePositionError = () => {
        console.log('location couldnt be obtained')
        // Dispatch an action that displays the alert letting the user know their location wasnt obtained and they need to manually search for their desired weather location
    }

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(
            handlePositionSuccess,
            handlePositionError
        )
    }

    useEffect(() => {
        if (!mounted) {
            getUserLocation()
            setMounted(true)
        }
    }, [mounted, setMounted, getUserLocation])

    return <div>The new non shitty weather app</div>
}

export default App
