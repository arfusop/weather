import styled from '@emotion/styled'

export const StyledLayout = styled.section`
    display: grid;
    padding: 1rem 1rem 0 1rem;
    grid-template-areas: 'a a';
    grid-gap: 10px;
    height: 90%;
    overflow: auto;

    .mainWeatherDetails,
    .bonusWeatherDetails {
        display: grid;
        grid-gap: 1rem;
        height: 95%;
    }

    .mainWeatherDetails {
        grid-template-rows: minmax(auto, 15rem) minmax(auto, 24rem) minmax(
                auto,
                14rem
            );
    }

    .bonusWeatherDetails {
        grid-template-rows: repeat(3, 1fr);
    }

    @media (max-width: 675px) {
        grid-template-areas: 'a';
        padding: 1rem;
        height: 100%;

        .mainWeatherDetails {
            height: 99%;
            grid-template-rows: 0.6fr 0.8fr 0.6fr;
        }
    }
`
