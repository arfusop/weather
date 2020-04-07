import styled from "@emotion/styled";

const Input = styled.input`
	width: 100%;
	border: 1px solid black;
	padding: 7px;
	font-size: 20px;
	border-radius: 5px;
	outline: none;
	font-weight: bold;
	background-color: #303035;
	color: white;

	::placeholder {
		color: #757575;
		font-weight: bold;
	}
`;

export default Input;
