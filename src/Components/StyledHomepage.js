import styled from 'styled-components'

const StyledHomepage = styled.div`
    background-image:linear-gradient(335deg,#fff 0%,#fff 35%, 
    rgba(240, 240, 240, 1) 35%,rgba(240,240,240,1) 65%,
    #fff 65%,#fff 100%);
    padding: 5px 0px 20px 0px;
    display: flex;
    flex-direction: column;
    .logo{
        width: 150px;
        margin: 40px 40px;
    }
    a{
        color: black;
        text-decoration: none;
        &:hover{
            color:  rgb(55,102,232)
        }
    }
   
`

export default StyledHomepage;