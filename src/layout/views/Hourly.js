import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import WeatherCard from '../../components/card'
import WeatherSpan from '../../components/weatherSpan'
import Icon from '../../components/icons'
import { StyledHourly } from './styled/StyledHourly'

const Hourly = () => {
    const { hourly } = useSelector(state => state.app.weather)

    return (
        <WeatherCard>
            <StyledHourly>
                <span className="title">Hourly card</span>
                <div className="hourlyItemsContainer">
                    {hourly.data.map((item, index) => {
                        const { icon, temperature, time } = item
                        const classList =
                            index === 0 ? 'current hourlyItem' : 'hourlyItem'
                        const hour = format(new Date(time * 1000), 'h a')
                        return (
                            <div key={index} className={classList}>
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
            </StyledHourly>
        </WeatherCard>
    )
}

export default Hourly
