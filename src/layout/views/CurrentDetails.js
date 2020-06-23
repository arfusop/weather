import React from 'react'
import { useSelector } from 'react-redux'
import { BsDropletHalf } from 'react-icons/bs'
import {
    WiHumidity,
    WiCloudyGusts,
    WiDaySunny,
    WiCloudy,
    WiThermometer,
    WiDayThunderstorm,
    WiBarometer
} from 'react-icons/wi'
import { FaEye } from 'react-icons/fa'
import WeatherCard from '../../components/card'
import WeatherSpan from '../../components/weatherSpan'
import Detail from '../../components/details'
import { StyledDetails } from './styled/StyledDetails'

const CurrentDetails = () => {
    const { currently } = useSelector(state => state.app.weather)
    const {
        apparentTemperature,
        dewPoint,
        humidity,
        pressure,
        nearestStormDistance,
        windGust,
        cloudCover,
        uvIndex,
        visibility
    } = currently

    return (
        <StyledDetails>
            <WeatherCard>
                <span className="title">Details</span>
                <div className="detailsContainer">
                    <Detail
                        className="currentDetails"
                        icon={<WiThermometer />}
                        description="RealFeel"
                        info={
                            <WeatherSpan
                                temp={Math.floor(apparentTemperature)}
                            />
                        }
                    />
                    <Detail
                        className="currentDetails"
                        icon={<WiHumidity />}
                        description="Humidity"
                        info={`${Math.floor(humidity * 100)}%`}
                    />
                    <Detail
                        className="currentDetails"
                        icon={<WiDaySunny />}
                        description="UV Index"
                        info={uvIndex}
                    />
                    <Detail
                        className="currentDetails"
                        icon={<BsDropletHalf />}
                        description="Dew Point"
                        info={<WeatherSpan temp={Math.floor(dewPoint)} />}
                    />
                    <Detail
                        className="currentDetails"
                        icon={<FaEye />}
                        description="Visibility"
                        info={`${visibility} miles`}
                    />
                    <Detail
                        className="currentDetails"
                        icon={<WiCloudyGusts />}
                        description="Wind"
                        info={`${windGust} mph`}
                    />
                    <Detail
                        className="currentDetails"
                        icon={<WiCloudy />}
                        description="Cloud Coverage"
                        info={`${Math.floor(cloudCover * 100)}%`}
                    />
                    <Detail
                        className="currentDetails"
                        icon={<WiDayThunderstorm />}
                        description="Nearest Storm"
                        info={`${Math.floor(nearestStormDistance)} miles`}
                    />
                    <Detail
                        className="currentDetails"
                        icon={<WiBarometer />}
                        description="Pressure"
                        info={Math.floor(pressure)}
                    />
                </div>
            </WeatherCard>
        </StyledDetails>
    )
}

export default CurrentDetails
