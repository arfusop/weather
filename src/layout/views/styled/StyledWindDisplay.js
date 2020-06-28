import styled from '@emotion/styled'

export const StyledWindDisplay = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;

    .windContainer {
        display: flex;
        justify-content: space-between;
        width: 50%;

        .wind {
            font-size: 1.8rem;
            display: flex;
            flex-direction: column;

            .gust {
                position: relative;
            }

            #firstGust {
                left: -0.3rem;
                top: 0.2rem;
            }

            #secondGust {
                left: 1rem;
                bottom: 0.9rem;
            }

            #thirdGust {
                left: 0.1rem;
                bottom: 1.5rem;
            }
        }

        .tree {
            height: 4rem;
            float: left;
            animation-name: gust;
            animation-duration: 3s;
            animation-iteration-count: infinite;

            .trunk {
                fill: black;
            }
            .brush {
                fill: #63aa70;
            }
        }
    }
    .mph {
        font-size: 1.2rem;
    }

    @keyframes gust {
        0% {
            transform: rotate3d(1, 1, 1, 0deg);
        }
        50% {
            transform: rotate3d(1, 1, 1, 10deg);
        }
        100% {
            transform: rotate3d(1, 1, 1, 0deg);
        }
    }
`
