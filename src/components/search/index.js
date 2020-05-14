import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { StyledSearch } from './style'

const Search = ({ ...rest }) => {
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

export default Search
