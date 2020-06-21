import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import { Drawer } from 'antd'
import RSC from 'react-scrollbars-custom'
import { BsDropletHalf } from 'react-icons/bs'
import {
    WiHumidity,
    WiCloudyGusts,
    WiDaySunny,
    WiCloudy,
    WiRain
} from 'react-icons/wi'
import { FaEye } from 'react-icons/fa'
import Detail from '../../components/details'
import WeatherCard from '../../components/card'
import WeatherSpan from '../../components/weatherSpan'
import Icon from '../../components/icons'
import { StyledHourly, StyledHourlyDrawer } from './styled/StyledHourly'
import { getWeatherIcon } from '../../helpers'

const Hourly = () => {
    const { hourly } = useSelector(state => state.app.weather)
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <WeatherCard>
            <StyledHourly className="HourlyCard">
                <span className="title">Hourly</span>
                <RSC style={{ width: 'auto', height: 'inherit' }}>
                    <div className="hourlyItemsContainer">
                        {hourly.data.map((item, index) => {
                            const { icon, temperature, time } = item
                            const classList =
                                index === 0
                                    ? 'current hourlyItem'
                                    : 'hourlyItem'
                            const hour = format(new Date(time * 1000), 'h a')
                            return (
                                <div
                                    key={index}
                                    onClick={() => setDrawerOpen(true)}
                                    className={classList}>
                                    <WeatherSpan
                                        key={'weatherSpan ' + index}
                                        temp={temperature}
                                    />
                                    <Icon key={'icon ' + index} icon={icon} />
                                    <span
                                        key={'time ' + index}
                                        className="hourlyTime">
                                        {hour}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </RSC>
                <Drawer
                    closable={true}
                    title="Next 49 hours"
                    width="auto"
                    visible={drawerOpen}
                    onClose={() => setDrawerOpen(false)}>
                    <StyledHourlyDrawer>
                        {hourly.data.map((hour, index) => {
                            const {
                                time,
                                summary,
                                icon,
                                precipProbability,
                                temperature,
                                apparentTemperature,
                                dewPoint,
                                humidity,
                                windGust,
                                cloudCover,
                                uvIndex,
                                visibility
                            } = hour

                            const precipValue = Math.floor(
                                precipProbability * 100
                            )

                            return (
                                <React.Fragment key={index}>
                                    <div
                                        className="detailedHourlyItem"
                                        key={`detailedHourlyItem ${index}`}>
                                        <div
                                            className="left"
                                            key={`left ${index}`}>
                                            <div
                                                className="top"
                                                key={`top ${index}`}>
                                                <div
                                                    className="hourlyDetailedIcon"
                                                    key={`hourlyDetailedIcon ${index}`}>
                                                    <i
                                                        key={`hourlyDetailIcon ${index}`}
                                                        className={`wi ${getWeatherIcon(
                                                            icon
                                                        )} hourlyIcon`}
                                                    />
                                                </div>
                                                <div className="detailedInfo">
                                                    <span
                                                        className="time"
                                                        key={`time ${index}`}>
                                                        {format(
                                                            new Date(
                                                                time * 1000
                                                            ),
                                                            'h a'
                                                        )}
                                                    </span>
                                                    <span
                                                        className="temps"
                                                        key={`temps ${index}`}>
                                                        <WeatherSpan
                                                            temp={temperature}
                                                        />{' '}
                                                        - RealFeel:{' '}
                                                        <WeatherSpan
                                                            temp={
                                                                apparentTemperature
                                                            }
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                className="bot"
                                                key={`bot ${index}`}>
                                                <div className="precip">
                                                    <WiRain /> {precipValue}%
                                                </div>
                                                <span className="summary">
                                                    {summary}
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="right"
                                            key={`right ${index}`}>
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
                                    <hr />
                                </React.Fragment>
                            )
                        })}
                    </StyledHourlyDrawer>
                </Drawer>
            </StyledHourly>
        </WeatherCard>
    )
}

export default Hourly
