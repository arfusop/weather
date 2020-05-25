import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { getWeatherIcon } from '../../helpers'

const Icon = ({ icon, styles }) => {
    return <i className={`wi ${getWeatherIcon(icon)}`} css={styles} />
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    styles: PropTypes.object
}

Icon.defaultProps = {
    styles: {}
}

export default Icon
