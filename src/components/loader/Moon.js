import React from 'react'
import StyledMoon from './StyledMoon'

const Moon = () => {
    return (
        <StyledMoon>
            <div className="moon">
                <div className="crater" />
                <div className="crater" />
                <div className="crater" />
                <div className="crater" />
                <div className="crater" />
            </div>
        </StyledMoon>
    )
}

export default Moon
