import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import WeatherCard from '../../components/card'
import WeatherSpan from '../../components/weatherSpan'
import { getWeatherIcon } from '../../helpers'
import StyledCurrentWeather from './styled/StyledCurrentWeather'

const CurrentWeather = () => {
    const {
        location,
        weather: { currently, daily, hourly }
    } = useSelector(state => state.app)
    const currentDay = daily.data[0]
    const date = format(new Date(), 'E, MMM d')
    
    return (
        <WeatherCard>
            <StyledCurrentWeather>
                <div className="currentInfo">
                    <div className="tempContainer">
                        <div className="currentTemp">
                            <WeatherSpan
                                size="large"
                                temp={currently.temperature}
                            />
                        </div>
                        <div className="tempExtremes">
                            <WeatherSpan
                                style={{
                                    position: 'relative',
                                    bottom: '0.3rem'
                                }}
                                temp={currentDay.temperatureHigh}
                            />
                            <span className="slash">/</span>
                            <WeatherSpan
                                style={{
                                    position: 'relative',
                                    top: '0.3rem'
                                }}
                                temp={currentDay.temperatureLow}
                            />
                        </div>
                    </div>
                    <i
                        className={`wi largeIcon ${getWeatherIcon(
                            currently.icon
                        )}`}
                    />
                </div>
                <div className="date">{date}</div>
                <div className="location">
                    {location?.formatted_address || null}
                </div>
                <div className="hourlySummary">{hourly.summary}</div>
            </StyledCurrentWeather>
        </WeatherCard>
    )
}

export default CurrentWeather
