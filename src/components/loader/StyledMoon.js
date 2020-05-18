import styled from '@emotion/styled'

const StyledMoon = styled.section`
    @keyframes eclipse {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(260px);
        }
    }

    @keyframes halo {
        from {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 181px;
    background-color: #000d1a;
    overflow: hidden;
    border-radius: 1%;
    box-shadow: 1px 1px 20px grey;

    .moon {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #c2c5cc;
    }

    /* halo */
    .moon::before {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0px 0px 50px #c2c5cc;
        opacity: 0;
        animation-name: halo;
        animation-duration: 7s;
        animation-timing-function: linear;
        animation-delay: 1s;
        animation-iteration-count: infinite;
    }

    /* eclipse */
    .moon::after {
        content: '';
        position: absolute;
        top: -5px;
        left: -140px;
        width: 110px;
        height: 110px;
        background-color: #000d1a;
        border-radius: 50%;
        animation-name: eclipse;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-delay: 1s;
        animation-iteration-count: infinite;
    }

    .crater {
        position: absolute;
        border-radius: 50%;
        background-color: grey;
    }

    .crater:nth-of-type(1) {
        width: 20px;
        height: 20px;
        top: 20px;
        left: 50px;
    }

    .crater:nth-of-type(2) {
        width: 10px;
        height: 10px;
        top: 40px;
        left: 70px;
    }

    .crater:nth-of-type(3) {
        width: 15px;
        height: 15px;
        top: 50px;
        left: 50px;
    }

    .crater:nth-of-type(4) {
        width: 8px;
        height: 8px;
        top: 40px;
        left: 20px;
    }

    .crater:nth-of-type(5) {
        width: 13px;
        height: 13px;
        top: 60px;
        left: 20px;
    }

    /* media queries */
    @media screen and (max-width: 600px) {
        width: 35%;
        margin: auto;
        transform: scale(0.9);
    }

    @media (inverted-colors) {
        :root {
            filter: invert(1);
        }
    }
`

export default StyledMoon
