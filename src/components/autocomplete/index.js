import React from 'react'
import Script from 'react-load-script'
import PropTypes from 'prop-types'

let autocomplete = null

const AutoComplete = ({ callback }) => {
    const handleScriptLoad = () => {
        console.log('loaded script')
        const options = { types: ['geocode'] }

        autocomplete = new window.google.maps.places.Autocomplete(
            document.getElementById('locationInput'),
            options
        )
        // Fire Event when a suggested name is selected
        autocomplete.addListener('place_changed', () => {
            // Extract City From Address Object
            let addressObject = autocomplete.getPlace()
            console.log(addressObject)
            if (!addressObject.geometry) return
            const { formatted_address, geometry } = addressObject
            callback(
                formatted_address,
                geometry.location.lat(),
                geometry.location.lng()
            )
        })
    }

    return (
        <Script
            url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5OfdpnZUgkR1LpThm7XMIeIJE49O2jZI&libraries=places"
            onLoad={handleScriptLoad}
        />
    )
}

AutoComplete.propTypes = {
    callback: PropTypes.func
}

AutoComplete.defaultProps = {
    callback: () => null
}

export default AutoComplete
