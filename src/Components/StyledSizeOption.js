import styled from "styled-components";

const StyledSizeOption = styled.button.attrs((props)=>({type: "button"}))`
    background-color: ${(props) => { return props.companySize === props.value ? "rgb(55,102,232)" : "rgb(240,240,240)" }};
    color:  ${(props) => { return props.companySize === props.value ? "white" : "black" }};
    border: 0px;
    padding: 4px 8px;
    border-radius: 2px;
    margin: 8px 4px 8px 0px
`


export default StyledSizeOption;