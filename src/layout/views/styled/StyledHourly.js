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
        }
    }
`
