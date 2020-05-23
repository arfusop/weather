import React from 'react'
import { Card } from 'antd'

const WeatherCard = ({ children }) => {
    return (
        <Card bodyStyle={{ backgroundColor: 'lightgrey', height: '100%' }}>
            {children}
        </Card>
    )
}

export default WeatherCard
