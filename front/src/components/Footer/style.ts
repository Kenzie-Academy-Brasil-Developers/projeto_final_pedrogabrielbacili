import styled from "styled-components";

export const StyledFooter = styled.div`
    display:flex;
    align-items: center;
    background:${({theme})=>theme.colors.gray900};
    height:140px;
    width:100%;
    flex-direction: row;
    justify-content: space-around;

    .buttonIcon{
        height:50px;
        width:53px;
    }
    .shop{
        font-size:14px
    }
    @media(max-width:500px){
        flex-direction:column;
        .motorsFooter, .copyright, .buttonIcon{
            margin-left:0;
            margin-top:8px;
        }
    }
`