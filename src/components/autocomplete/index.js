import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { SearchBar, Suggestions } from '../search'
import 'react-google-places-autocomplete/dist/index.min.css'

const AutoComplete = () => {
    return (
        <GooglePlacesAutocomplete
            apiKey="AIzaSyA5OfdpnZUgkR1LpThm7XMIeIJE49O2jZI"
            onSelect={e => console.log(e)}
            placeholder="Location"
            renderInput={props => <SearchBar {...props} />}
            renderSuggestions={(active, suggestions, onSelectSuggestion) => (
                <Suggestions
                    active={active}
                    suggestions={suggestions}
                    onSelectSuggestion={onSelectSuggestion}
                />
            )}
        />
    )
}

export default AutoComplete
