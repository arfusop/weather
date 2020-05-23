import styled from '@emotion/styled'

const StyledApp = styled.section`
    height: 100%;
    display: grid;
    grid-template-rows: 3rem 1fr 1.5rem;

    footer {
        display: flex;
        justify-content: center;

        a {
            color: white;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`

export default StyledApp
