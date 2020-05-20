import React from 'react'
import { StyledLayout } from './style'
import Location from './Location'
import Weather from './Weather'

const Layout = () => {
    return (
        <StyledLayout className="Layout">
            <Location />
            <Weather />
        </StyledLayout>
    )
}

export default Layout
