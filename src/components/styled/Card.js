import styled from "@emotion/styled";

const Card = styled.div`
	display: flex;
	flex-direction: row;
	padding: ${props => props.padding};
	justify-content: space-between;
	align-items: center;
	border: 1px solid black;
  margin: 5px;
  border-radius: 5px;
  height: 100%;
  max-height: ${props => props.height};
`;

export default Card;
