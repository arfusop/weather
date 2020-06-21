import styled from '@emotion/styled'

export const StyledDaily = styled.section`
    width: 100%;
    height: 100%;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;

        .expand {
            cursor: pointer;
        }
    }

    .dailyItemsContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 1rem;

        .dailyItem {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .precipIndicator {
                min-height: 22px;
                color: #2292d4;
            }

            .tempIndicator {
                width: 0.65rem;
                height: 5rem;
                text-align: center;
                border-radius: 8px;
            }

            .warmColors {
                background: #f2994a;
                background: -webkit-linear-gradient(to right, #f2c94c, #f2994a);
                background: linear-gradient(
                    to top,
                    orange,
                    #f2994a,
                    tomato,
                    #d1001c
                );
            }

            .coolColors {
                background: #4e54c8;
                background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);
                background: linear-gradient(
                    to top right,
                    #2980b9,
                    #0000a0,
                    #00007c
                );
            }

            .dailyIcon {
                font-size: 1.8rem;
            }

            .dayOfWeek {
                font-size: 1.1rem;
            }
        }
    }

    @media (max-width: 650px) {
        .dailyItemsContainer {
            padding: 1rem 0;

            .dailyItem {
                .dailyIcon {
                    font-size: 1.5rem;
                }

                .dayOfWeek {
                    font-size: 1rem;
                }
            }
        }
    }
`

export const StyledDailyDrawer = styled.section`
    display: grid;
    grid-gap: 1rem;

    hr {
        width: 100%;
        border: 1px solid #f0f0f0;
    }

    .detailedDailyItem {
        display: grid;
        grid-template-columns: 0.7fr 1fr;
        grid-gap: 0.75rem;

        .top,
        .mid {
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
                .dailyDetailedIcon {
                    border: 1px solid transparent;
                    border-radius: 50%;
                    background-color: #305d88;
                    height: 2.5rem;
                    width: 2.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    margin: 0 auto;

                    i {
                        font-size: 1.1.rem;
                    }
                }

                .detailedInfo {
                    display: grid;
                    grid-template-rows: 1.2rem 1.2rem;
                    grid-gap: 10px;

                    .date,
                    .temps {
                        display: flex;
                        align-items: center;
                        line-height: 1.1;
                        font-size: 1.1rem;
                        font-weight: bold;
                    }
                }
            }

            .mid {
                font-size: 1rem;

                .precip {
                    color: #2292d4;
                    text-align: center;
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
        .detailedDailyItem {
            grid-template-columns: 1fr;
        }
    }
`
