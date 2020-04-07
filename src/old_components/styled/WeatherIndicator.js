import styled from "@emotion/styled";

const WeatherIndicator = styled.div`
	/* circle styles */
	width: 140px;
	height: 140px;
	border: 2px solid ${props => props.borderColor};
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

	.feelsLike,
	.high_low {
		font-size: 1rem;
	}

	.currentTemp {
		font-size: 1.75rem;
		margin: 8px 0;
	}
`;

export default WeatherIndicator;
