import styled from "@emotion/styled";

const Card = styled.div`
	display: flex;
	flex-direction: row;
	padding: ${props => props.padding};
	/* width: ${props => props.width}; */
	justify-content: space-between;
	align-items: center;
	border: 1px solid black;
  margin: 5px;
  
  /* @media (min-width: 600px) {
    width: 33%;
  }
  @media (max-width: 600px) {
    width: 85%;
  } */
`;

export default Card;
