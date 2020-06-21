import styled from '@emotion/styled'

export const StyledDetail = styled.section`
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: ${props => props.theme.blue};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 1rem;
    text-align: center;

    .icon {
        font-size: 1.5rem;
    }

    .degrees {
        border-color: white;
    }
`
