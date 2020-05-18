import React, { useState } from 'react'
import { FaSearch, FaMapPin } from 'react-icons/fa'
import { StyledSearch, StyledSuggestions } from './style'

export const Search = ({ ...rest }) => {
    const [open, setOpen] = useState(false)
    return (
        <StyledSearch transitionLength="0.6s">
            <input
                style={{ width: open ? '100%' : 0 }}
                id="react-google-places-autocomplete-input"
                className="searchInput"
                {...rest}
            />
            <div className="searchIcon">
                <FaSearch className="search" onClick={() => setOpen(!open)} />
            </div>
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
                        className="suggestion"
                        onClick={event =>
                            onSelectSuggestion(suggestion, event)
                        }>
                        <FaMapPin />
                        {description}
                    </div>
                )
            })}
        </StyledSuggestions>
    )
}
