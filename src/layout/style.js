import styled from '@emotion/styled'

export const StyledLayout = styled.section`
    display: grid;
    padding: 1rem 1rem 0 1rem;
    grid-template-areas: 'a a';
    grid-gap: 10px;
    height: 95%;

    .mainWeatherDetails,
    .bonusWeatherDetails {
        display: grid;
        grid-gap: 1rem;
        height: 93%;
    }

    .mainWeatherDetails {
        grid-template-rows: repeat(3, 1fr);
    }

    .bonusWeatherDetails {
        grid-template-rows: repeat(4, 1fr);
    }
`
