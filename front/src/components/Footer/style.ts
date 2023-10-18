import styled from "styled-components";

export const StyledFooter = styled.div`
    display:flex;
    align-items: center;
    background:${({theme})=>theme.colors.gray900};
    height:140px;
    width:100%;
    
    .motorsFooter{
        margin-left:5%;
    }
    .copyright{
        margin-left:28%;
    }
    .buttonIcon{
        margin-left:27%;
        height:50px;
        width:53px;
    }
    .shop{
        font-size:14px
    }
`