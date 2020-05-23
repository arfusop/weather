import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { format, getDay } from 'date-fns'
import WeatherCard from '../../components/card'
import { getWeatherIcon, getDayOfWeek } from '../../helpers'

const StyledCurrentWeather = styled.section``

const CurrentWeather = () => {
    const {
        location,
        weather: { currently, daily, hourly, minutely }
    } = useSelector(state => state.app)
    const currentDay = daily.data[0]
    const dayOfWeek = getDay(new Date())
    const date = format(new Date(), `${getDayOfWeek(dayOfWeek)}, MMM d`)
    const town =
        Object.keys(location).length > 0
            ? location.address_components.filter(component => {
                  if (component.types[0] === 'locality') {
                      return component
                  }
              })
            : ''
    return (
        <WeatherCard>
            <StyledCurrentWeather>
                <div className="currentInfo">
                    <i className={`wi ${getWeatherIcon(currently.icon)}`} />
                    <h2>{currently.temperature}</h2>{' '}
                    <h4>
                        {currentDay.temperatureHigh}/{currentDay.temperatureLow}
                    </h4>
                </div>
                <div className="date">{date}</div>
                <div className="location">
                    {Object.keys(town).length > 0 ? town[0].short_name : ''}
                </div>
                <div className="currentSummary">
                    <i className={`wi ${getWeatherIcon(hourly.icon)}`} />{' '}
                    {hourly.summary}
                </div>
            </StyledCurrentWeather>
        </WeatherCard>
    )
}

export default CurrentWeather
