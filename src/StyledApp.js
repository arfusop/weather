import styled from '@emotion/styled'

const StyledApp = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;

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
