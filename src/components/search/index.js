import React from 'react'
import { FaMapPin } from 'react-icons/fa'
import { AutoComplete, Input } from 'antd'
import { StyledSearch, StyledSuggestions } from './style'

export const SearchBar = ({ ...rest }) => {
    const { Search } = Input
    return (
        <StyledSearch transitionLength="0.6s">
            <Search {...rest} />
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
