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
                <div className="celestialContainer">
                    <SunDisplay rise={sunrise} set={sunset} />
                    <MoonDisplay phase={moonPhase} />
                    <WindDisplay gust={windGust} />
                </div>
            </WeatherCard>
        </StyledCelestialCycles>
    )
}

export default CelestialCycles
