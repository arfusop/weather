import styled from '@emotion/styled'

export const StyledSearch = styled.section``

export const StyledSuggestions = styled.section`
    .suggestion {
        height: 2rem;
        width: auto;
        background-color: white;
        padding: 0 0.75rem;
        display: flex;
        align-items: center;

        span {
            margin-left: 4px;
        }

        &:hover {
            background-color: #d9d9d9;
        }
    }
`
