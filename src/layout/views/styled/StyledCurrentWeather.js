import styled from '@emotion/styled'
const StyledCurrentWeather = styled.section`
    color: black;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1rem;

    .largeIcon {
        font-size: 3rem;
    }

    .currentInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tempContainer {
            display: flex;
            width: 9.5rem;
            justify-content: space-between;
            .currentTemp {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .tempExtremes {
                display: grid;
                grid-template-columns: 2rem 0.5rem 2rem;
                align-items: center;
            }

            .slash {
                text-align: center;
            }
        }
    }
`

export default StyledCurrentWeather
