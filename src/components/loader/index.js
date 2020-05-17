import React from 'react'
import PropTypes from 'prop-types'
import Sun from './Sun'
import Moon from './Moon'

const Loader = ({ theme }) => {
    if (theme === 'night') {
        return <Moon />
    }
    return <Sun />
}

Loader.propTypes = {
    theme: PropTypes.string
}

Loader.defaultProps = {
    theme: 'day'
}

export default Loader
