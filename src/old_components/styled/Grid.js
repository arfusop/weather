import styled from "@emotion/styled";

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	/* grid-template-rows: .5fr 3fr; */
	grid-template-rows: .5fr 3fr 60px;
	/* grid-template-rows: .5fr 1fr 1fr 1fr 1fr; */
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	/* background-color: ${props => props.theme.appBg}; */
`;

export default Grid;
