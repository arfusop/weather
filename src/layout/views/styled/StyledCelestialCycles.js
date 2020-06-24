import styled from '@emotion/styled'

export const StyledCelestialCycles = styled.section`
    .celestialContainer {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 2rem 1fr;

        .celestialSwitchToggle {
            transform: scale(1.5);
            width: 3rem;

            span {
                display: flex;
            }

            svg {
                font-size: 1.2rem;
            }

            .sunSwitch {
                color: yellow;
            }
        }

        .sunDisplay {
            display: grid;
            grid-template-rows: 1fr 1.5rem;
            justify-content: center;

            .halfCircle {
                display: inline-block;
                height: 160px;
                width: 320px;
                border-top-left-radius: 320px;
                border-top-right-radius: 320px;
                border: 1px dashed black;
                border-bottom: none;
                margin: 0 1.5rem;
            }

            .times {
                display: flex;
                justify-content: space-between;
            }
        }
    }
`
