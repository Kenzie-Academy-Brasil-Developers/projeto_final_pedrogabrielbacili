import styled from "styled-components";

export const StyledProductCard=styled.div`
    width:312px;
    height:350px;
    margin-left:5%;
    margin-top:3%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    img{
        width:312px;
        height:152px;
    }
    .imagemUsuario{
        display:flex;
        img{
            width:32px;
            height:32px;
            border-radius:50%;
        }
        .anunciante{
            margin-top:4px;
            margin-left:10px;
        }
    }
    .dadosNumericos{
        display:flex;
        justify-content:space-between;
        align-items: center;
        .anoKM{
            display:flex;
            align-items:center;
        }
        .km{
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content: center;
            height:31px;
            width:51px;
            background:${({theme})=>theme.colors.blue100};
            color:${({theme})=>theme.colors.blue900};
        }
        .ano{
            display:flex;
            flex-direction:row;
            justify-content: center;
            align-items:center;
            margin-left:15px;
            height:31px;
            width:51px;
            background:${({theme})=>theme.colors.blue100};
            color:${({theme})=>theme.colors.blue900};
        }
        .preco{
            color:${({theme})=>theme.colors.gray700};
            font-family:'Lexend', sans-serif;
            font-size:16px;
        }
    }
`