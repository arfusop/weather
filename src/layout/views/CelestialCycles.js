import React, { useState } from 'react'
import { Switch } from 'antd'
import { useSelector } from 'react-redux'
import { WiMoonAltWaningCrescent4, WiDaySunny } from 'react-icons/wi'
import WeatherCard from '../../components/card'
import SunDisplay from './SunDisplay'
import MoonDisplay from './MoonDisplay'
import { StyledCelestialCycles } from './styled/StyledCelestialCycles'

const CelestialCycles = () => {
    const [mode, setMode] = useState('sun')
    // const { sunrise, sunset, daily } = useSelector(state => state.app.weather)
    const { sunrise, sunset } = useSelector(state => state.app.weather)

    const toggleChecked = checked => {
        const update = checked ? 'sun' : 'moon'
        setMode(update)
    }

    return (
        <StyledCelestialCycles>
            <WeatherCard>
                <div className="celestialContainer">
                    <Switch
                        className="celestialSwitchToggle"
                        checkedChildren={<WiDaySunny className="sunSwitch" />}
                        unCheckedChildren={
                            <WiMoonAltWaningCrescent4 className="moonSwitch" />
                        }
                        defaultChecked
                        onChange={toggleChecked}
                    />
                    {mode === 'sun' ? (
                        <SunDisplay rise={sunrise} set={sunset} />
                    ) : (
                        <MoonDisplay />
                    )}
                </div>
            </WeatherCard>
        </StyledCelestialCycles>
    )
}

export default CelestialCycles
