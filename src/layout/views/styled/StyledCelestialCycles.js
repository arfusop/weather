import styled from '@emotion/styled'

export const StyledCelestialCycles = styled.section`
    .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        height: 100%;

        .celestialContainer {
            display: grid;
            grid-template-rows: 2rem 1fr;

            .phases {
                display: grid;
                grid-template-columns: 2fr 1fr;

                .moonDisplay {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.2rem;

                    svg {
                        font-size: 2.5rem;
                    }
                }

                .sunDisplay {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    font-size: 1.2rem;

                    .sunRise,
                    .sunSet {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    svg {
                        font-size: 3rem;
                    }
                }
            }
        }
    }
`
