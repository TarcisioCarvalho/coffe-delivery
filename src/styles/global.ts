import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    :focus{
        outline:0;
    }

    body{
        //background-color:${({theme})=> theme.colors.background};
        background-color:drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        padding-left:10rem;
        padding-right:10rem;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family:${({theme}) => theme.fonts.regular},sans-serif;
        font-size:${({theme})=> theme.textSizes["size-16px"]};
        font-weight:${({theme})=> theme.fontsWeight.regularRoboto};
        color:${({theme})=> theme.colors["base-text"]};
    }


`; 