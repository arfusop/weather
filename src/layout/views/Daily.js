import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import { Drawer } from 'antd'
import { FaAngleRight } from 'react-icons/fa'
import WeatherCard from '../../components/card'
import WeatherSpan from '../../components/weatherSpan'
import { getWeatherIcon, determineTempIndicatorClass } from '../../helpers'
import { StyledDaily } from './styled/StyledDaily'

const Daily = () => {
    const { daily } = useSelector(state => state.app.weather)
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <StyledDaily className="DailyCard">
            <WeatherCard className="StyledDailyWeather">
                <div className="title">
                    <span>Next 7 days</span>
                    <span>
                        <FaAngleRight onClick={() => setDrawerOpen(true)} />
                    </span>
                </div>
                <div className="dailyItemsContainer">
                    {daily.data.map((day, index) => {
                        if (index === daily.data.length - 1) {
                            return null
                        }
                        const {
                            temperatureMax,
                            temperatureMin,
                            precipProbability,
                            time,
                            icon
                        } = day

                        const displayPrecip = precipProbability > 0.09
                        const precipValue = Math.floor(precipProbability * 100)
                        const tempIndicatorClass = determineTempIndicatorClass(
                            temperatureMax
                        )

                        return (
                            <div className="dailyItem" key={index}>
                                <WeatherSpan
                                    key={`dailyHighTemp ${index}`}
                                    temp={temperatureMax}
                                />
                                <div
                                    className={`tempIndicator ${tempIndicatorClass}`}
                                />
                                <WeatherSpan
                                    key={`dailyLowTemp ${index}`}
                                    temp={temperatureMin}
                                />
                                <div className="precipIndicator">
                                    {displayPrecip ? (
                                        <span>{precipValue}%</span>
                                    ) : null}
                                </div>
                                <i
                                    className={`wi ${getWeatherIcon(
                                        icon
                                    )} dailyIcon`}
                                />
                                <span className="dayOfWeek">
                                    {format(new Date(time * 1000), 'EEE')}
                                </span>
                            </div>
                        )
                    })}
                </div>
                <Drawer
                    onClose={() => setDrawerOpen(false)}
                    closable={true}
                    title="A detailed daily look"
                    width="75%"
                    visible={drawerOpen}>
                    <div className="detailedDailyContainer">
                        {daily.data.map((day, index) => {
                            const {
                                temperatureMax,
                                temperatureMin,
                                icon,
                                time,
                                summary,
                                precipProbability
                            } = day

                            const displayPrecip = precipProbability > 0.09
                            const precipValue = Math.floor(
                                precipProbability * 100
                            )

                            return (
                                <div className="detailedDailyItem">
                                    <div className="top">
                                        <div className="icons">
                                            <span className="dailyDetailedIcon">
                                                <i
                                                    className={`wi ${getWeatherIcon(
                                                        icon
                                                    )} dailyIcon`}
                                                />
                                            </span>
                                            {displayPrecip ? (
                                                <span>{precipValue}%</span>
                                            ) : null}
                                        </div>
                                        <div className="detailedInfo">
                                            <span className="date">
                                                {format(
                                                    new Date(time * 1000),
                                                    'EEEE, LLLL d'
                                                ).toUpperCase()}
                                            </span>
                                            <span className="temps">
                                                <WeatherSpan
                                                    temp={temperatureMax}
                                                />
                                                /
                                                <WeatherSpan
                                                    temp={temperatureMin}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bot">{summary}</div>
                                </div>
                            )
                        })}
                    </div>
                </Drawer>
            </WeatherCard>
        </StyledDaily>
    )
}

export default Daily
