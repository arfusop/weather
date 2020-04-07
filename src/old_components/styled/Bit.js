import styled from "@emotion/styled";

const Bit = styled.div`
	height: 100%;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	justify-items: center;
	align-items: center;
	text-align: center;
	padding: 0 5px;
	/* max-width: 80px;
	width: 70px; */
	border-right: 1px solid black;

	@media (max-width:600px) {
		border-bottom: 1px solid black;
	}
`;

export default Bit;
