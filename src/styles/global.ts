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
        padding-left:1rem;
        padding-right:1rem;
        -webkit-font-smoothing: antialiased;
    }

    ul {
        list-style:none ;
    }

    @media only screen and (min-width: 1150px) {
        body {
                padding-left:7rem;
                padding-right:7rem;
            }
        }

    body, input, textarea, button{
        font-family:${({theme}) => theme.fonts.regular},sans-serif;
        font-size:${({theme})=> theme.textSizes["size-16px"]};
        font-weight:${({theme})=> theme.fontsWeight.regularRoboto};
        color:${({theme})=> theme.colors["base-text"]};
    }


`; 