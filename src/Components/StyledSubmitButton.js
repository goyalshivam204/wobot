import styled from "styled-components";

const StyledSubmitButton = styled.button.attrs((props)=>({type: "submit"}))`
    width: 100%;
    background-color:  rgb(55,102,232);
    color: white;
    border: none;
    padding: 8px 16px;
    margin: 8px 4px 8px 0px;
    border-radius: 4px;
`

export default StyledSubmitButton;