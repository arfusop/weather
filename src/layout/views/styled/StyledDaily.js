import styled from '@emotion/styled'

export const StyledDaily = styled.section`
    width: 100%;
    height: 100%;

    .dailyItemsContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 1rem 0;

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
                width: 1rem;
                height: 5rem;
                text-align: center;
            }

            .warmColors {
                background: #f2994a;
                background: -webkit-linear-gradient(to right, #f2c94c, #f2994a);
                background: linear-gradient(
                    to top right,
                    #f2c94c,
                    #f2994a,
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
        }
    }
`
