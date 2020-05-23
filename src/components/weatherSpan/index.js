import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledSpan = styled.span``

const WeatherSpan = ({ temp }) => {
    return <StyledSpan>{temp} &#730;</StyledSpan>
}

WeatherSpan.propTypes = {
    temp: PropTypes.number.isRequired
}

export default WeatherSpan
