import styled from '@emotion/styled'

export const StyledWindDisplay = styled.section`
    .tree {
        /* width: 33%; */
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

    @keyframes gust {
        0% {
            transform: rotate3d(1, 1, 1, 0deg);
        }
        25% {
            transform: rotate3d(1, 1, 1, 15deg);
        }
        50% {
            transform: rotate3d(1, 1, 1, 25deg);
        }
        75% {
            transform: rotate3d(1, 1, 1, 15deg);
        }
        100% {
            transform: rotate3d(1, 1, 1, 0deg);
        }
    }
`
