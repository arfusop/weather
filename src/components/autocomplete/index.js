import React from 'react'
import GooglePlacesAutocomplete, {
    geocodeByAddress
} from 'react-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { SearchBar, Suggestions } from '../search'
import { SET_LOCATION } from '../../store/types/app'
import { getWeather } from '../../store/actions/app'
import 'react-google-places-autocomplete/dist/index.min.css'

const AutoComplete = () => {
    const dispatch = useDispatch()
    const handleSelection = async e => {
        try {
            const res = await geocodeByAddress(e.description)
            const { geometry } = res[0]
            dispatch({ type: SET_LOCATION, payload: res[0] })
            dispatch(
                getWeather(geometry.location.lat(), geometry.location.lng())
            )
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
