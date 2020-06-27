import React from 'react'
import { getMoonPhaseIcon } from '../../helpers'

const MoonDisplay = ({ phase }) => {
    const { icon, label } = getMoonPhaseIcon(phase)
    return (
        <div>
            Today {icon} {label}
        </div>
    )
}

export default MoonDisplay
