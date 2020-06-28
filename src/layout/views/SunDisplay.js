import React from 'react'
import { format } from 'date-fns'
import { WiSunrise, WiSunset } from 'react-icons/wi'

const SunDisplay = ({ rise, set }) => {
    return (
        <div className="sunDisplay">
            <span className="sunRise">
                <WiSunrise /> {format(new Date(rise), 'h:m a')}
            </span>
            <span className="sunSet">
                <WiSunset /> {format(new Date(set), 'h:m a')}
            </span>
        </div>
    )
}

export default SunDisplay
