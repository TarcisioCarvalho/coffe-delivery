import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background-color:${props=>props.theme.colors.background};
        padding-left:10rem;
        padding-right:10rem;
        -webkit-font-smoothing: antialiased;
    }


`; 