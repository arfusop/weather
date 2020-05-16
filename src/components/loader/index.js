import React from 'react'
import { getHours } from 'date-fns'
import Sun from './Sun'
import Moon from './Moon'

const Loader = () => {
    const hours = getHours(new Date())
    if (hours > 18) {
        return <Moon />
    }
    return <Sun />
}

export default Loader
