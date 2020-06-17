import styled from '@emotion/styled'

export const StyledSearch = styled.section`
    padding: 1rem 1rem 0 1rem;
`

export const StyledSuggestions = styled.section`
    position: absolute;
    width: 100%;
    padding: 0 1rem;
    z-index: 2;

    .suggestion {
        min-height: 2rem;
        width: auto;
        background-color: white;
        padding: 0 0.7rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        
        span {
            margin-left: 5px;
        }

        &:hover {
            background-color: #d9d9d9;
        }
    }
`
