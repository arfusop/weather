import styled from '@emotion/styled'

export const StyledHourly = styled.section`
    .hourlyItemsContainer {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        height: 7rem;
        width: 89%;
        margin-top: 0.7rem;
        position: absolute;

        .hourlyItem {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 4rem;
            margin-bottom: 1rem;
            padding: 0.7rem 0;
        }
    }
`
