import React from 'react'
import { format } from 'date-fns'
import Sun from './Sun'
import Moon from './Moon'

const Loader = () => {
    const day = format(new Date(), 'a')
    if (day === 'pm') {
        return <Moon />
    }
    return <Sun />
}

export default Loader
