import React from 'react'
import { StyledDetail } from './style'

const Detail = ({ description, icon, info }) => {
    return (
        <StyledDetail>
            <div className="icon">{icon}</div>
            <div className="description">{description}</div>
            <div className="info">{info}</div>
        </StyledDetail>
    )
}

export default Detail
