import styled from "@emotion/styled";

const WeatherIndicator = styled.div`
	/* circle styles */
	width: 130px;
	height: 130px;
	border: 1px solid #222;
	border-radius: 50%;

	/* become a flex container */
	/* its children will be flex items */
	display: flex;
	/* place items in column */
	flex-direction: column;
	/* center flex items horizontally */
	align-items: center;
	/* center all content vertically */
	justify-content: center;
`;

export default WeatherIndicator;
