import React from 'react'
import { Card } from 'antd'

const WeatherCard = ({ children, id }) => {
    return (
        <Card
            className="WeatherCard"
            id={id}
            bodyStyle={{ backgroundColor: '#f8f8ff', height: '100%' }}>
            {children}
        </Card>
    )
}

export default WeatherCard
