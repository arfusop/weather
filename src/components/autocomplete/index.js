import React from 'react'
import GooglePlacesAutocomplete, {
    geocodeByAddress
} from 'react-google-places-autocomplete'
import { SearchBar, Suggestions } from '../search'
import 'react-google-places-autocomplete/dist/index.min.css'

const AutoComplete = () => {
    const handleSelection = async e => {
        console.log(e)
        try {
            const res = await geocodeByAddress(e.description)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <GooglePlacesAutocomplete
            apiKey={process.env.REACT_APP_GOOGLE_KEY}
            onSelect={handleSelection}
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
