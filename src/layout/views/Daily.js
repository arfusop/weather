import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import WeatherCard from '../../components/card'
import WeatherSpan from '../../components/weatherSpan'
import { getWeatherIcon } from '../../helpers'
import { StyledDaily } from './styled/StyledDaily'

const Daily = () => {
    const { daily } = useSelector(state => state.app.weather)

    return (
        <StyledDaily className="DailyCard">
            <WeatherCard className="StyledDailyWeather">
                <span className="title">Next 7 days</span>
                <div className="dailyItemsContainer">
                    {daily.data.map((day, index) => {
                        const {
                            temperatureMax,
                            temperatureMin,
                            precipProbability,
                            precipType,
                            time,
                            icon
                        } = day

                        const displayPrecip = precipProbability > 0.09

                        return (
                            <div className="dailyItem" key={index}>
                                <WeatherSpan
                                    key={`dailyHighTemp ${index}`}
                                    temp={temperatureMax}
                                />
                                <div className="indicator" />
                                <WeatherSpan
                                    key={`dailyLowTemp ${index}`}
                                    temp={temperatureMin}
                                />
                                <div className="precipIndicator">
                                    {displayPrecip ? (
                                        <span>{precipProbability}%</span>
                                    ) : null}
                                </div>
                                <i className={`wi ${getWeatherIcon(icon)}`} />
                                <span className="dayOfWeek">
                                    {format(new Date(time * 1000), 'EEE')}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </WeatherCard>
        </StyledDaily>
    )
}

export default Daily
