import React from 'react'
import { useSelector } from 'react-redux'
import { StyledLayout } from './style'
import RSC from 'react-scrollbars-custom'
import CurrentWeather from './views/CurrentWeather'
import CurrentDetails from './views/CurrentDetails'
import Hourly from './views/Hourly'
import Daily from './views/Daily'
import CelestialCycles from './views/CelestialCycles'
import Precipitation from './views/Precipitation'

const Layout = () => {
    const { weather } = useSelector(state => state.app)

    if (Object.keys(weather).length > 0) {
        return (
            // <RSC>
            <StyledLayout className="Layout">
                <div className="mainWeatherDetails">
                    <CurrentWeather />
                    <CurrentDetails />
                    <Hourly />
                </div>
                <div className="bonusWeatherDetails">
                    <Daily />
                    <Precipitation />
                    <CelestialCycles />
                </div>
            </StyledLayout>
            // </RSC>
        )
    }

    return null
}

export default Layout
