import styled from '@emotion/styled'

export const StyledLayout = styled.section`
    display: grid;
    padding: 1rem;
    grid-template-areas: 'a a';
    grid-gap: 10px;
    /* grid-auto-rows: 50%; */

    .mainWeatherDetails,
    .bonusWeatherDetails {
        display: grid;
        grid-gap: 1rem;
    }
`
