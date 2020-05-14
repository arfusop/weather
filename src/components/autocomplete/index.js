import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import Search from '../search'
import 'react-google-places-autocomplete/dist/index.min.css'

const AutoComplete = () => {
    return (
        <GooglePlacesAutocomplete
            apiKey="AIzaSyA5OfdpnZUgkR1LpThm7XMIeIJE49O2jZI"
            onSelect={e => console.log(e)}
            renderInput={props => (
                <div className="custom-wrapper">
                    <Search
                        // Custom properties
                        {...props}
                    />
                </div>
            )}
            renderSuggestions={(active, suggestions, onSelectSuggestion) => (
                <div className="suggestions-container">
                    {suggestions.map(suggestion => (
                        <div
                            className="suggestion"
                            onClick={event =>
                                onSelectSuggestion(suggestion, event)
                            }>
                            {suggestion.description}
                        </div>
                    ))}
                </div>
            )}
        />
    )
}

export default AutoComplete
