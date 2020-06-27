import React from 'react'
import {
    WiMoonAltFirstQuarter,
    WiMoonAltFull,
    WiMoonAltNew,
    WiMoonAltThirdQuarter,
    WiMoonAltWaningCrescent4,
    WiMoonAltWaningGibbous4,
    WiMoonAltWaxingCrescent4,
    WiMoonAltWaxingGibbous1
} from 'react-icons/wi'

export const getWeatherIcon = label => {
    let icon
    switch (label) {
        case 'clear-day':
            icon = 'wi-day-sunny'
            break
        case 'clear-night':
            icon = 'wi-night-clear'
            break
        case 'rain':
            icon = 'wi-rain'
            break
        case 'snow':
            icon = 'wi-snow'
            break
        case 'sleet':
            icon = 'wi-sleet'
            break
        case 'wind':
            icon = 'wi-windy'
            break
        case 'fog':
            icon = 'wi-fog'
            break
        case 'cloudy':
            icon = 'wi-cloudy'
            break
        case 'partly-cloudy-day':
            icon = 'wi-day-cloudy'
            break
        case 'partly-cloudy-night':
            icon = 'wi-night-cloudy'
            break
        default:
            icon = 'wi-na'
            break
    }
    return icon
}

export const determineTempIndicatorClass = temp => {
    let tempClass

    if (temp > 70) {
        tempClass = 'warmColors'
    } else {
        tempClass = 'coolColors'
    }

    return tempClass
}

export const getMoonPhaseIcon = phase => {
    switch (true) {
        case phase === 0:
            return { icon: <WiMoonAltNew />, label: 'New Moon' }
        case phase > 0 && phase < 0.25:
            return {
                icon: <WiMoonAltWaxingCrescent4 />,
                label: 'Waxing Crescent'
            }
        case phase === 0.25:
            return { icon: <WiMoonAltFirstQuarter />, label: 'First Quarter' }
        case phase > 0.25 && phase < 0.5:
            return {
                icon: <WiMoonAltWaxingGibbous1 />,
                label: 'Waxing Gibbous'
            }
        case phase === 0.5:
            return { icon: <WiMoonAltFull />, label: 'Full Moon' }
        case phase > 0.5 && phase < 0.75:
            return {
                icon: <WiMoonAltWaningGibbous4 />,
                label: 'Waning Gibbous'
            }
        case phase === 0.75:
            return { icon: <WiMoonAltThirdQuarter />, label: 'Third Quarter' }
        case phase > 0.75:
            return {
                icon: <WiMoonAltWaningCrescent4 />,
                label: 'Waning Crescent'
            }
        default:
            return null
    }
}
