import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { getWeatherIcon } from '../../../helpers'

const StyledCurrentWeather = styled.section``

const CurrentWeather = () => {
    const {
        currently,
        daily: { data }
    } = useSelector(state => state.app.weather)
    const currentDay = data[0]

    return (
        <StyledCurrentWeather>
            <div className="temp">
                <i className={`wi ${getWeatherIcon(currently.icon)}`} />
                <h2>{currently.temperature}</h2>{' '}
                <h4>
                    {currentDay.temperatureHigh}/{currentDay.temperatureLow}
                </h4>
            </div>
        </StyledCurrentWeather>
    )
}

export default CurrentWeather
