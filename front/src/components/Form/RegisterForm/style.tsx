import styled from "styled-components";

export const StyleRegister =styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    background:${({theme})=>theme.colors.gray250};
    label{
        margin-top:-75px;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-top:50px;
        margin-bottom:50px;
        width:411px;
        border-radius:4px;
        height:1630px;
        background:${({theme})=>theme.colors.white};

        .buttonFinalizar{
            width:76%;
        }
        p{
            font-size:14px;
        }
        .buttonsTipoConta{
            width:76%;
            display: flex;
            justify-content: space-between;
            margin-right:10px;
        }
        .styledEstAndCit, .styledNumeroAndComplemento{
            display:flex;
            width: 78%;
            .estado, .cidade, .numero, .complemento{
                justify-content: space-between;
                width:50%;
                margin-top: 55px;
                display:flex;
                flex-direction:column;
                input{
                    width:150px;
                    padding:10px;
                }
                @media(max-width:480px){
                    input{
                        width:100px;
                    }
                }
                @media(max-width:350px){
                    input{
                        width:80px;
                    }
                }
            }
        }
        
    }

    @media(max-width:500px){
        form{
            width:80%;
        }
        input{
            width:190px;
        }
    }

`