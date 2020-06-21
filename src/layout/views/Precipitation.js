import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { useSelector } from 'react-redux'
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'
import WeatherCard from '../../components/card'

const Precipitation = () => {
    const { hourly } = useSelector(state => state.app.weather)
    const [mounted, setMounted] = useState(false)
    const [precipData, setPrecipData] = useState([])

    useEffect(() => {
        if (!mounted && hourly?.data) {
            let data = []
            const step = 3

            for (let index = 0; index < hourly.data.length; index += step) {
                const { time, precipProbability } = hourly.data[index]
                const precip = {
                    time: format(new Date(time * 1000), 'h a'),
                    precipProbability: precipProbability * 100,
                    max: 100
                }
                data.push(precip)
            }

            setPrecipData(data)
        }
    }, [mounted, setMounted, setPrecipData, hourly])

    return (
        <WeatherCard>
            <span className="title">Chance of Precipitation</span>
            <AreaChart width={300} height={300} data={precipData}>
                <XAxis dataKey="time" />
                <YAxis tickFormatter={tick => `${tick}%`} />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="precipProbability"
                    stroke="#8884d8"
                    fill="#8884d8"
                />
            </AreaChart>
        </WeatherCard>
    )
}

export default Precipitation
