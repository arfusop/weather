import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { StyledSearch, StyledSuggestions } from './style'

export const Search = ({ ...rest }) => {
    return (
        <StyledSearch transitionLength="0.6s">
            <input id="react-google-places-autocomplete-input" {...rest} />
            <label for="react-google-places-autocomplete-input">
                <FaSearch className="searchIcon" />
            </label>
            <input type="submit" id="search-submit" />
        </StyledSearch>
    )
}

export const Suggestions = ({ active, suggestions, onSelectSuggestion }) => {
    return (
        <StyledSuggestions>
            {suggestions.map((suggestion, index) => {
                const { description } = suggestion
                return (
                    <div
                        onClick={event =>
                            onSelectSuggestion(suggestion, event)
                        }>
                        {description}
                    </div>
                )
            })}
        </StyledSuggestions>
    )
}
