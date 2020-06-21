import styled from '@emotion/styled'

export const StyledHourly = styled.section`
    width: 100%;
    height: 90%;

    .hourlyItemsContainer {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        height: 7rem;
        margin-top: 0.7rem;
        position: absolute;

        .hourlyItem {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 4rem;
            padding: 0.7rem 0;
            border: 1px solid transparent;
            border-radius: 2px;
            cursor: pointer;

            &:hover {
                background-color: ${props => props.theme.blue};
                color: white;

                .degrees {
                    border-color: white;
                }
            }
        }
    }
`

export const StyledHourlyDrawer = styled.section`
    display: grid;
    grid-gap: 1rem;

    hr {
        width: 100%;
        border: 1px solid #f0f0f0;
    }

    .detailedHourlyItem {
        display: grid;
        grid-template-columns: 0.7fr 1fr;
        grid-gap: 0.75rem;

        .top,
        .bot {
            display: grid;
            grid-template-columns: 3rem 1fr;
            grid-gap: 1rem;
        }

        .left {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 1rem;

            .top {
                .hourlyDetailedIcon {
                    border: 1px solid transparent;
                    border-radius: 50%;
                    background-color: ${props => props.theme.blue};
                    height: 2.5rem;
                    width: 2.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    margin: 0 auto;

                    i {
                        font-size: 1.1rem;
                    }
                }

                .detailedInfo {
                    display: grid;
                    grid-template-rows: 1.2rem 1.2rem;
                    grid-gap: 10px;

                    .time,
                    .temps {
                        display: flex;
                        align-items: center;
                        line-height: 1.1;
                        font-size: 1.1rem;
                        font-weight: bold;
                    }
                }
            }

            .bot {
                font-size: 1rem;

                .precip {
                    color: #2292d4;
                    text-align: center;
                    display: flex;

                    svg {
                        font-size: 1.5rem;
                    }
                }
            }
        }

        .right {
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr 1fr;
        }
    }

    @media (max-width: 650px) {
        .detailedHourlyItem {
            grid-template-columns: 1fr;
        }
    }
`
