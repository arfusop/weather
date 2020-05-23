import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { format, getDay } from 'date-fns'
import WeatherCard from '../../components/card'
import WeatherSpan from '../../components/weatherSpan'
import { getWeatherIcon, getDayOfWeek } from '../../helpers'

const StyledCurrentWeather = styled.section``

const CurrentWeather = () => {
    const {
        location,
        weather: { currently, daily, hourly }
    } = useSelector(state => state.app)
    const currentDay = daily.data[0]
    const dayOfWeek = getDay(new Date())
    const date = `${getDayOfWeek(dayOfWeek)}, ${format(new Date(), 'MMM d')}`

    return (
        <WeatherCard>
            <StyledCurrentWeather>
                <div className="currentInfo">
                    <div className="currentTemp">
                        <i className={`wi ${getWeatherIcon(currently.icon)}`} />
                        <WeatherSpan temp={currently.temperature} />{' '}
                    </div>
                    <div className="tempExtremes">
                        <WeatherSpan temp={currentDay.temperatureHigh} />/
                        <WeatherSpan temp={currentDay.temperatureLow} />
                    </div>
                </div>
                <div className="date">{date}</div>
                <div className="location">{location.town}</div>
                <div className="currentSummary">
                    <i className={`wi ${getWeatherIcon(hourly.icon)}`} />{' '}
                    {hourly.summary}
                </div>
            </StyledCurrentWeather>
        </WeatherCard>
    )
}

export default CurrentWeather
