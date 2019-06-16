import styled from "@emotion/styled";

const Card = styled.div`
	padding: ${props => props.padding};
	border: 1px solid black;
	border-radius: 5px;
	height: ${props => props.height};
	max-height: ${props => props.height};

	display: grid;
	grid-template-rows: 40px 1fr;
	justify-content: center;
	align-items: center;

	/* .featuredCityCard {
		display: grid;
		grid-template-columns: 1.5fr 2fr;
	} */
`;

export default Card;
