import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { useSelector, useDispatch } from 'react-redux'
import { getHours } from 'date-fns'
import Geocode from 'react-geocode'
import AutoComplete from './autocomplete'
import Loader from './loader'
import Layout from './layout'
import StyledApp from './StyledApp'
import { getWeather, getUserAgent } from '../helpers'
import {
    UPDATE_WEATHER,
    SET_LOADING,
    SET_THEME,
    SET_LOCATION,
    SET_ALERT
} from '../store/types/app'
import { SET_USER_AGENT } from '../store/types/user'

const App = () => {
    const [mounted, setMounted] = useState(false)
    const { loaderTheme, loading } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!mounted) {
            const handlePositionSuccess = position => {
                const { latitude, longitude } = position.coords
                Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY)
                Geocode.setLanguage('en')
                Geocode.enableDebug()
                Geocode.fromLatLng(latitude, longitude).then(
                    response => {
                        const address = response
                        dispatch({ type: SET_LOCATION, payload: address })
                    },
                    error => {
                        console.error(error)
                        dispatch({
                            type: SET_ALERT,
                            payload: {
                                type: 'error',
                                text: 'We were unable to get your location.'
                            }
                        })
                    }
                )

                const getWeatherData = async () => {
                    const weatherData = await getWeather(latitude, longitude)
                    dispatch({ type: UPDATE_WEATHER, payload: weatherData })
                    dispatch({ type: SET_LOADING, payload: false })
                }
                getWeatherData()
            }
            const handlePositionError = () => {
                dispatch({ type: SET_LOADING, payload: false })
                dispatch({
                    type: SET_ALERT,
                    payload: {
                        type: 'error',
                        text: 'We were unable to get your location.'
                    }
                })
            }

            const getUserLocation = () => {
                dispatch({ type: SET_LOADING, payload: true })
                navigator.geolocation.getCurrentPosition(
                    handlePositionSuccess,
                    handlePositionError
                )
            }
            getUserLocation()
            const hours = getHours(new Date())
            const theme = hours > 17 ? 'night' : 'day'
            dispatch({ type: SET_THEME, payload: theme })
            document.querySelector('body').classList.add(theme)

            const userAgent = getUserAgent()
            dispatch({ type: SET_USER_AGENT, payload: userAgent })
            setMounted(true)
        }
    }, [dispatch, mounted, setMounted])

    // const updateGeolocation = (address, lat, long) => {
    //     console.log('address: ', address)
    //     console.log('lat: ', lat)
    //     console.log('long: ', long)
    // }

    const theme = {}
    return (
        <ThemeProvider theme={theme}>
            <StyledApp className="App">
                {loading ? <Loader theme={loaderTheme} /> : null}
                <AutoComplete />
                <Layout />
            </StyledApp>
        </ThemeProvider>
    )
}

export default App
