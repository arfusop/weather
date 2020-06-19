import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledSpan = styled.span`
    display: flex;
    font-size: ${props => (props.size === 'large' ? '3rem' : '1rem')};
    align-items: center;
    justify-content: space-between;
    height: ${props => (props.size === 'large' ? '3rem' : '1rem')};
    width: ${props => (props.size === 'large' ? '4.5rem' : '1.9rem')};

    .degrees {
        height: ${props => (props.size === 'large' ? '10px' : '7px')};
        width: ${props => (props.size === 'large' ? '10px' : '7px')};
        border: 1px solid black;
        border-radius: 50%;
        position: relative;
        bottom: ${props => (props.size === 'large' ? '0.6rem' : '0.1rem')};
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
