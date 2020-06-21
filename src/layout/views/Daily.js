import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import { Drawer } from 'antd'
import { BsDropletHalf } from 'react-icons/bs'
import { WiHumidity, WiCloudyGusts, WiDaySunny, WiCloudy } from 'react-icons/wi'
import { FaEye } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import WeatherCard from '../../components/card'
import WeatherSpan from '../../components/weatherSpan'
import Detail from '../../components/details'
import { getWeatherIcon, determineTempIndicatorClass } from '../../helpers'
import { StyledDaily, StyledDailyDrawer } from './styled/StyledDaily'

const Daily = () => {
    const { daily } = useSelector(state => state.app.weather)
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <StyledDaily className="DailyCard">
            <WeatherCard className="StyledDailyWeather">
                <div className="title">
                    <span>Next 7 days</span>
                    <span className="expand">
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

                        const precipValue = Math.floor(precipProbability * 100)
                        const tempIndicatorClass = determineTempIndicatorClass(
                            temperatureMax
                        )

                        return (
                            <div
                                className="dailyItem"
                                key={`dailyItem ${index}`}>
                                <WeatherSpan
                                    key={`dailyHighTemp ${index}`}
                                    temp={temperatureMax}
                                />
                                <div
                                    className={`tempIndicator ${tempIndicatorClass}`}
                                    key={`tempIndicator ${index}`}
                                />
                                <WeatherSpan
                                    key={`dailyLowTemp ${index}`}
                                    temp={temperatureMin}
                                />
                                <div
                                    className="precipIndicator"
                                    key={`precipIndicator ${index}`}>
                                    <span key={`precip ${index}`}>
                                        {precipValue}%
                                    </span>
                                </div>
                                <i
                                    className={`wi ${getWeatherIcon(
                                        icon
                                    )} dailyIcon`}
                                    key={`dailyIcon ${index}`}
                                />
                                <span
                                    className="dayOfWeek"
                                    key={`dayOfWeek ${index}`}>
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
                    width="65%"
                    visible={drawerOpen}>
                    <StyledDailyDrawer className="detailedDailyContainer">
                        {daily.data.map((day, index) => {
                            const {
                                temperatureMax,
                                temperatureMin,
                                icon,
                                time,
                                summary,
                                precipProbability,
                                dewPoint,
                                humidity,
                                windGust,
                                uvIndex,
                                visibility,
                                cloudCover
                            } = day

                            const displayPrecip = precipProbability > 0.09
                            const precipValue = Math.floor(
                                precipProbability * 100
                            )

                            return (
                                <React.Fragment key={`fragment ${index}`}>
                                    <div
                                        className="detailedDailyItem"
                                        key={`detailedDailyItem ${index}`}>
                                        <div
                                            className="left"
                                            key={`left ${index}`}>
                                            <div
                                                className="top"
                                                key={`top ${index}`}>
                                                <div
                                                    className="dailyDetailedIcon"
                                                    key={`dailyDetailedIcon ${index}`}>
                                                    <i
                                                        key={`dailyDetailIcon ${index}`}
                                                        className={`wi ${getWeatherIcon(
                                                            icon
                                                        )} dailyIcon`}
                                                    />
                                                </div>
                                                <div
                                                    className="detailedInfo"
                                                    key={`detailedInfo ${index}`}>
                                                    <span
                                                        className="date"
                                                        key={`date ${index}`}>
                                                        {format(
                                                            new Date(
                                                                time * 1000
                                                            ),
                                                            'EEEE, LLLL d'
                                                        ).toUpperCase()}
                                                    </span>
                                                    <span
                                                        className="temps"
                                                        key={`temps ${index}`}>
                                                        <WeatherSpan
                                                            key={`temperatureMax ${index}`}
                                                            temp={
                                                                temperatureMax
                                                            }
                                                        />
                                                        /
                                                        <WeatherSpan
                                                            key={`temperatureMin ${index}`}
                                                            temp={
                                                                temperatureMin
                                                            }
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                className="mid"
                                                key={`mid ${index}`}>
                                                {displayPrecip ? (
                                                    <div
                                                        className="precip"
                                                        key={`precipDetail ${index}`}>
                                                        {precipValue}%
                                                    </div>
                                                ) : (
                                                    <div
                                                        key={`placeholder ${index}`}></div>
                                                )}
                                                <span
                                                    className="summary"
                                                    key={`summary ${index}`}>
                                                    {summary}
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="right"
                                            key={`bot ${index}`}>
                                            <Detail
                                                className="dailyDetail"
                                                icon={<WiHumidity />}
                                                description="Humidity"
                                                info={`${Math.floor(
                                                    humidity * 100
                                                )}%`}
                                                key={`humidity ${index}`}
                                            />
                                            <Detail
                                                className="dailyDetail"
                                                icon={<WiDaySunny />}
                                                description="UV Index"
                                                info={uvIndex}
                                                key={`uvindex ${index}`}
                                            />
                                            <Detail
                                                className="dailyDetail"
                                                icon={<BsDropletHalf />}
                                                description="Dew Point"
                                                info={
                                                    <WeatherSpan
                                                        temp={Math.floor(
                                                            dewPoint
                                                        )}
                                                    />
                                                }
                                                key={`dewpoint ${index}`}
                                            />
                                            <Detail
                                                className="dailyDetail"
                                                icon={<FaEye />}
                                                description="Visibility"
                                                info={`${visibility} miles`}
                                                key={`visibility ${index}`}
                                            />
                                            <Detail
                                                className="dailyDetail"
                                                icon={<WiCloudyGusts />}
                                                description="Wind"
                                                info={`${windGust} mph`}
                                                key={`wind ${index}`}
                                            />
                                            <Detail
                                                className="dailyDetail"
                                                icon={<WiCloudy />}
                                                description="Cloud Coverage"
                                                info={`${Math.floor(
                                                    cloudCover * 100
                                                )}%`}
                                                key={`cloudcoverage ${index}`}
                                            />
                                        </div>
                                    </div>
                                    <hr key={`hr ${index}`} />
                                </React.Fragment>
                            )
                        })}
                    </StyledDailyDrawer>
                </Drawer>
            </WeatherCard>
        </StyledDaily>
    )
}

export default Daily
