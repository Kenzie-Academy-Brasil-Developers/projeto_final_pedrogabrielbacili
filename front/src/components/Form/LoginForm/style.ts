import styled from "styled-components";

export const StyledContainerForm = styled.div`
    display:flex;
    justify-content:center;
    background:#f1f3f5;
    padding:44px 48px 44px 48px;
    
    form{
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content:space-evenly;
        width:90%;
        height:542px;
        border-radius:4px;
        background:${({theme})=>theme.colors.gray10};
        input{
            padding:0px 16px 0px 16px;
        }
        .StyleesqueciMinhaSenha{
            margin-left: 24%;
            margin-top:-15px;
        }

    }
    @media(max-width:500px){
        input, button{
            width:200px;
        }
    }
    @media(max-width:350px){
        input, button{
            width:150px;
        }
    }
`