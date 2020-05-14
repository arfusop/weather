import React from 'react'
import { format, getHours } from 'date-fns'
import Sun from './Sun'
import Moon from './Moon'

const Loader = () => {
    const day = format(new Date(), 'a')
    const hours = getHours(new Date())
    console.log(hours)

    if (day === 'pm') {
        return <Moon />
    }
    return <Sun />
}

export default Loader
