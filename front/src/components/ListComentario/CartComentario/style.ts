import styled from "styled-components";

export const StyleCartComentarios = styled.div`
    width:663px;
    height:116px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-top:8%;
    .ftimg{
        display:flex;
        justify-content:center;
        height:32px;
        width:32px;
        border-radius:50%;
        background:red;
        align-items:center;
        color:${({theme})=>theme.colors.white}
    }
    .divDados{
        display:flex;
        align-items:center;
    }
    .nomeUser{
        margin-left:10px;
    }
    .dias{
        margin-left:20px;
    }

`