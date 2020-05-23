import React from 'react'
import { useSelector } from 'react-redux'
import { StyledLayout } from './style'
import CurrentWeather from './views/CurrentWeather'
import CurrentDetails from './views/CurrentDetails'
import Hourly from './views/Hourly'
import Daily from './views/Daily'
import MoonCycle from './views/MoonCycle'
import SunCycle from './views/SunCycle'
import Precipitation from './views/Precipitation'

const Layout = () => {
    const { weather } = useSelector(state => state.app)

    if (Object.keys(weather).length > 0) {
        return (
            <StyledLayout className="Layout">
                <div className="mainWeatherDetails">
                    <CurrentWeather />
                    <Hourly />
                    <Daily />
                </div>
                <div className="bonusWeatherDetails">
                    <CurrentDetails />
                    <Precipitation />
                    <SunCycle />
                    <MoonCycle />
                </div>
            </StyledLayout>
        )
    }

    return null
}

export default Layout
