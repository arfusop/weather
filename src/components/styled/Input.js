import styled from "@emotion/styled";

const Input = styled.input`
	width: 100%;
	border: 1px solid black;
	/* border-right: none; */
	padding: 7px;
	font-size: 20px;
	/* border-top-left-radius: 5px;
	border-bottom-left-radius: 5px; */
	border-radius: 5px;
	outline: none;
	font-weight: bold;

	::placeholder {
		color: #757575;
		font-weight: bold;
	}
`;

export default Input;
