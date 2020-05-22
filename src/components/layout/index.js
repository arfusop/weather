import React from 'react'
import { useSelector } from 'react-redux'
import { StyledLayout } from './style'
import CurrentWeather from './views/CurrentWeather'

const Layout = () => {
    const { weather } = useSelector(state => state.app)

    if (Object.keys(weather).length > 0) {
        return (
            <StyledLayout className="Layout">
                <CurrentWeather />
            </StyledLayout>
        )
    }

    return null
}

export default Layout
