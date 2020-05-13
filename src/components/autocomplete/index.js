import React from 'react'
import Script from 'react-load-script'

let autocomplete = null

const AutoComplete = () => {
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
            this.updateGoogleLocationData(
                formatted_address,
                geometry.location.lat(),
                geometry.location.lng()
            )
        })
    }

    return (
        <Script
            url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfBb7wMtoqYklIWJzZVv62bWsVvfIfZg0&libraries=places"
            onLoad={handleScriptLoad}
        />
    )
}

export default AutoComplete
