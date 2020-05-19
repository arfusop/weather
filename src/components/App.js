import React, { useEffect, useReducer, useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { getHours } from 'date-fns'
import Geocode from 'react-geocode'
import { initialState, reducer } from '../helpers/state/reducer'
import {
    LOCATION,
    LOADING,
    SET_THEME,
    UPDATE_WEATHER
} from '../helpers/state/types'
import { getWeather } from '../helpers/state/actions'
import AutoComplete from './autocomplete'
import Loader from './loader'
import StyledApp from './StyledApp'

const App = () => {
    const [mounted, setMounted] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (!mounted) {
            const handlePositionSuccess = position => {
                const { latitude, longitude } = position.coords

                // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
                Geocode.setApiKey('AIzaSyDAT0Ey55iQNnqlwIHppYgYNs6agx8tS8o')

                // set response language. Defaults to english.
                Geocode.setLanguage('en')

                // Enable or disable logs. Its optional.
                Geocode.enableDebug()

                // Get address from latidude & longitude.
                Geocode.fromLatLng(latitude, longitude).then(
                    response => {
                        const address = response.results[0].formatted_address
                        dispatch({
                            type: LOCATION,
                            payload: {
                                data: { payload: address.results[0] },
                                label: LOCATION
                            }
                        })
                    },
                    error => {
                        console.error(error)
                    }
                )

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
            const hours = getHours(new Date())
            const theme = hours > 17 ? 'night' : 'day'
            dispatch({
                type: SET_THEME,
                payload: { data: theme }
            })

            document.querySelector('body').classList.add(theme)
            setMounted(true)
        }
    }, [mounted, setMounted])

    // const updateGeolocation = (address, lat, long) => {
    //     console.log('address: ', address)
    //     console.log('lat: ', lat)
    //     console.log('long: ', long)
    // }

    const { loading, theme } = state
    const appTheme = {}
    return (
        <ThemeProvider theme={appTheme}>
            <StyledApp>
                {loading ? <Loader theme={theme} /> : null}
                <AutoComplete />
            </StyledApp>
        </ThemeProvider>
    )
}

export default App
