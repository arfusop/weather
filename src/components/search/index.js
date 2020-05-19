import React from 'react'
import { FaSearch, FaMapPin } from 'react-icons/fa'
import { Input } from 'antd'
import { StyledSearch, StyledSuggestions } from './style'

export const SearchBar = ({ ...rest }) => {
    return (
        <StyledSearch transitionLength="0.6s">
            <Input {...rest} prefix={<FaSearch />} />
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
                        <span>{description}</span>
                    </div>
                )
            })}
        </StyledSuggestions>
    )
}
