import React from 'react'
import { getMoonPhaseIcon } from '../../helpers'

const MoonDisplay = ({ phase }) => {
    const { icon, label } = getMoonPhaseIcon(phase)
    return (
        <div className="moonDisplay">
            {icon} <span>{label}</span>
        </div>
    )
}

export default MoonDisplay
