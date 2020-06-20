import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledSpan = styled.span`
    display: flex;
    font-size: ${props => (props.size === 'large' ? '3rem' : '1rem')};
    align-items: center;
    justify-content: space-between;
    height: ${props => (props.size === 'large' ? '3rem' : '1rem')};
    width: ${props => (props.size === 'large' ? '3.9rem' : '1.5rem')};

    .degrees {
        height: ${props => (props.size === 'large' ? '7px' : '5px')};
        width: ${props => (props.size === 'large' ? '7px' : '5px')};
        border: 1px solid black;
        border-radius: 50%;
        position: relative;
        bottom: ${props => (props.size === 'large' ? '1rem' : '0.35rem')};
    }
`

const WeatherSpan = ({ size, style, temp }) => {
    return (
        <StyledSpan className="WeatherSpan" size={size} style={style}>
            {Math.round(temp)} <div className="degrees" />
        </StyledSpan>
    )
}

WeatherSpan.propTypes = {
    temp: PropTypes.number.isRequired,
    size: PropTypes.string,
    style: PropTypes.object
}

WeatherSpan.defaultProps = {
    size: 'normal',
    style: {}
}

export default WeatherSpan
