import styled from "@emotion/styled";

const Title = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.titleFont};
  padding: 10px 0;
  font-weight: bold;
`;

export default Title;
