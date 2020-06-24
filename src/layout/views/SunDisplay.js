import React from 'react'
import { format } from 'date-fns'

const SunDisplay = ({ rise, set }) => {
    return (
        <div className="sunDisplay">
            <div className="halfCircle"></div>
            <div className="times">
                <span className="sunRise">
                    {format(new Date(rise), 'h:m a')}
                </span>
                <span className="sunSet">{format(new Date(set), 'h:m a')}</span>
            </div>
        </div>
    )
}

export default SunDisplay
