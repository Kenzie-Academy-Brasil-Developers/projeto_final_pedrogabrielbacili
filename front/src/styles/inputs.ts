import styled from "styled-components";

export const StyledInputs = styled.div`
    input{
        width:315px;
        height:48px;
        border-radius:4px;
        border:1.5px solid ${({theme})=>theme.colors.gray250};
        color:${({theme})=>theme.colors.gray550};
        font-size:16px;
        &:hover{
            background:${({theme})=>theme.colors.gray100}
        }
        &:focus{
            border:1.5px solid ${({theme})=>theme.colors.blue800};
        }
    }
`