import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import Search from '../search'
import 'react-google-places-autocomplete/dist/index.min.css'

const AutoComplete = () => {
    return <GooglePlacesAutocomplete onSelect={e => console.log(e)} />
}

export default AutoComplete
