import React from 'react'
import { useSelector } from 'react-redux'
import WeatherCard from '../../components/card'
import WindDisplay from './WindDisplay'
import SunDisplay from './SunDisplay'
import MoonDisplay from './MoonDisplay'
import { StyledCelestialCycles } from './styled/StyledCelestialCycles'

const CelestialCycles = () => {
    const { sunrise, sunset, daily, currently } = useSelector(
        state => state.app.weather
    )
    const { moonPhase } = daily?.data[0]
    const { windGust } = currently

    return (
        <StyledCelestialCycles>
            <WeatherCard>
                <div className="container">
                    <div className="celestialContainer">
                        <span className="title">Today</span>
                        <div className="phases">
                            <SunDisplay rise={sunrise} set={sunset} />
                            <MoonDisplay phase={moonPhase} />
                        </div>
                    </div>
                    <WindDisplay gust={windGust} />
                </div>
            </WeatherCard>
        </StyledCelestialCycles>
    )
}

export default CelestialCycles
