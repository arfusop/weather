import styled from '@emotion/styled'

export const StyledSearch = styled.form`
    #react-google-places-autocomplete-input {
        transition: width ${props => props.transitionLength},
            border-radius ${props => props.transitionLength},
            background ${props => props.transitionLength},
            box-shadow ${props => props.transitionLength};
        /* width: 40px; */
        width: 300px;
        height: 40px;
        border-radius: 1%;
        box-shadow: 1px 1px 5px grey;
        border: none;
        cursor: pointer;
        background: rgb(235, 235, 235);
        font-size: 1rem;

        & + label .searchIcon {
            color: black;
        }
        &:hover {
            color: white;
            background: rgb(200, 200, 200);
            box-shadow: 0 0 0 5px rgb(61, 71, 82);
            & + label .searchIcon {
                color: white;
            }
        }
        &:focus {
            transition: width ${props => props.transitionLength}
                    cubic-bezier(0, 1.22, 0.66, 1.39),
                border-radius ${props => props.transitionLength},
                background ${props => props.transitionLength};
            border: none;
            outline: none;
            box-shadow: none;
            padding-left: 15px;
            cursor: text;
            width: 300px;
            border-radius: auto;
            background: rgb(235, 235, 235);
            box-shadow: 1px 1px 5px grey;
            color: black;
            & + label .searchIcon {
                color: black;
            }
        }
        &:not(:focus) {
            text-indent: -5000px;
        }
    }

    #search-submit {
        position: relative;
        left: -5000px;
    }

    .searchIcon {
        position: relative;
        left: -29px;
        top: 2px;
        color: white;
        cursor: pointer;
    }

    .suggestions-container {
        background-color: black;
    }
`

export const StyledSuggestions = styled.section``
