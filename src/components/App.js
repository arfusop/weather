import React, { useEffect } from 'react'

const App = () => {
    const success = position => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        console.log('latitude: ', latitude)
        console.log('longitude: ', longitude)
        // 1. Dispatch an update to global state for user location
        // 2. Dispatch an action that triggers the weather API call based on users location

        // example for my location API call:
        // https://api.darksky.net/forecast/1bd704b5c1758006d72f10d0e9e86dc5/40.8199635,-73.9832809
    }
    const error = () => {
        console.log('location couldnt be obtained')
        // Dispatch an action that displays the alert letting the user know their location wasnt obtained and they need to manually search for their desired weather location
    }

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error)
    }
    useEffect(() => {
        getUserLocation()
    }, [])
    return <div>The new non shitty weather app</div>
}

export default App
