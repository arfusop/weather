import styled from '@emotion/styled'

export const StyledSearch = styled.section`
    display: grid;
    grid-template-columns: 1fr 2rem;
    justify-content: center;
    align-items: center;
    /* width: 2rem; */
    height: 2rem;
    font-size: 1rem;
    /* transition: width all 1s ease-out; */
    transition: width 1s;

    &:focus {
        width: 100%;
    }

    .searchInput {
        height: 100%;
        border: none;
        padding: 0 5px;
    }

    .searchIcon {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }

    .search,
    .searchInput {
        font-size: 1.2rem;
    }
`

export const StyledSuggestions = styled.section`
    .suggestion {
        height: 2rem;
        width: auto;
        border-radius: 1%;
        background-color: white;
    }
`
