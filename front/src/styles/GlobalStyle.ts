import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        list-style: none;
        text-decoration: none;
    },
    body{
        display: flex;
        flex-direction: column;
        height:100%;
        margin: 0;
        font-family: sans-serif;
    }
    a{
      color:none;
    }
    
      html, body, #root {
        height: 100%;
      }
    
      .App {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
       
  label{
    margin-top:-76px;
    color:${({theme})=>theme.colors.gray700};
    font-size:14px;
  }
  input{
    width:315px;
    height:48px;
    border-radius:4px;
    border:1.5px solid ${({theme})=>theme.colors.gray250};
    font-size:16px;
    &:hover{
      background:${({theme})=>theme.colors.gray100};
    };
    &:focus{
      outline: none;
      border:1.5px solid ${({theme})=>theme.colors.blue800};
    };
    
      main {
        flex-grow: 1;
      }
    }
`;


