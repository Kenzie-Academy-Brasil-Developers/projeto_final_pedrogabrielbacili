import styled from "styled-components";

export const StyledNameUser= styled.div`
    display:flex;
    align-items:center;
    margin-right: 2%;
    border-left: 2px solid ${({theme})=>theme.colors.gray400};
    width:25%;
    height:79px;
    img{
        width:32px;
        height:32px;
        border-radius:50%;
        margin-left:25%;
    }
    span{
        margin-left:10px
    }
    @media (max-width:601px){
        display:none;
    }
`

export const StyledMenuHambuguer = styled.div`
    font-size: 24px;
    color: #333;
    cursor: pointer;
    margin-right:3%;
    @media (min-width: 600px) {
        display: none;
}
`