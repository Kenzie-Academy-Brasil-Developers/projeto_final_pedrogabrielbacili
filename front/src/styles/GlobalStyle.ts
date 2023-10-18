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
    
      html, body, #root {
        height: 100%;
      }
    
      .App {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    
      main {
        flex-grow: 1;
      }
`;


