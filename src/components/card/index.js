import React from 'react'
import { Card } from 'antd'

const WeatherCard = ({ children }) => {
    return (
        <Card bodyStyle={{ backgroundColor: '#f8f8ff', height: '100%' }}>
            {children}
        </Card>
    )
}

export default WeatherCard
