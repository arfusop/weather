import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { getWeatherIcon } from '../../../helpers'

const StyledCurrentWeather = styled.section``

const CurrentWeather = () => {
    const { currently, daily, minutely } = useSelector(
        state => state.app.weather
    )
    const currentDay = daily.data[0]

    return (
        <StyledCurrentWeather>
            <div className="currentInfo">
                <i className={`wi ${getWeatherIcon(currently.icon)}`} />
                <h2>{currently.temperature}</h2>{' '}
                <h4>
                    {currentDay.temperatureHigh}/{currentDay.temperatureLow}
                </h4>
            </div>
            <div className="currentSummary">{currently.summary}</div>
            <div className="minutelySummary">
                <i className={`wi ${getWeatherIcon(minutely.icon)}`} />{' '}
                {minutely.summary}
            </div>
        </StyledCurrentWeather>
    )
}

export default CurrentWeather
