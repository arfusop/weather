import React from 'react'
import { useSelector } from 'react-redux'
import { parse, getHours, format } from 'date-fns'
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
                        const hour = format(new Date(time), 'h a')

                        return (
                            <div className={classList}>
                                <WeatherSpan temp={temperature} />
                                <Icon icon={icon} />
                                <span className="hourlyTime">{hour}</span>
                            </div>
                        )
                    })}
                </div>
            </StyledHourly>
        </WeatherCard>
    )
}

export default Hourly
