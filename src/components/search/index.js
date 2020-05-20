import React from 'react'
import { FaSearch, FaMapPin } from 'react-icons/fa'
import { Input } from 'antd'
import { StyledSearch, StyledSuggestions } from './style'

export const SearchBar = ({ ...rest }) => {
    return (
        <StyledSearch className="Search">
            <Input {...rest} prefix={<FaSearch />} />
        </StyledSearch>
    )
}

export const Suggestions = ({ active, suggestions, onSelectSuggestion }) => {
    return (
        <StyledSuggestions className="Suggestions">
            {suggestions.map((suggestion, index) => {
                const { description } = suggestion
                return (
                    <div
                        className="suggestion"
                        onClick={event =>
                            onSelectSuggestion(suggestion, event)
                        }>
                        <FaMapPin />
                        <span>{description}</span>
                    </div>
                )
            })}
        </StyledSuggestions>
    )
}
