import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { useSelector, useDispatch } from 'react-redux'
import { getHours } from 'date-fns'
import Geocode from 'react-geocode'
import AutoComplete from './components/autocomplete'
import Loader from './components/loader'
import Layout from './layout'
import StyledApp from './StyledApp'
import { getWeather } from './store/actions/app'
import { getUserAgent } from './store/actions/user'
import {
    SET_LOADING,
    SET_LOADER_THEME,
    SET_LOCATION,
    SET_ALERT
} from './store/types/app'

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
                        const filtered = response.results[0].address_components.filter(
                            component => {
                                if (component.types[0] === 'locality') {
                                    return component.short_name
                                }
                            }
                        )
                        const town = filtered[0].short_name
                        dispatch({
                            type: SET_LOCATION,
                            payload: { data: response.results[0], town }
                        })
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
                dispatch(getWeather(latitude, longitude))
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
            const theme = hours < 20 && hours > 4 ? 'sun' : 'moon'
            dispatch({ type: SET_LOADER_THEME, payload: theme })
            document.querySelector('body').classList.add(theme)
            dispatch(getUserAgent())
            setMounted(true)
        }
    }, [dispatch, mounted, setMounted])

    const theme = {}
    return (
        <ThemeProvider theme={theme}>
            <StyledApp className="App">
                {loading ? <Loader theme={loaderTheme} /> : null}
                <AutoComplete />
                <Layout />
                <footer>
                    <a
                        href="https://darksky.net/poweredby/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Powered by Dark Sky
                    </a>
                </footer>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App
