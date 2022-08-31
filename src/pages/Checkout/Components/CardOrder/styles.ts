import styled from "styled-components";


export const CardOrderContainer = styled.article`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    padding:1rem;
    //max-width:256px;
    overflow:auto;
    background-color:${({theme})=> theme.colors["base-card"]};
    position:relative;
    border-radius: 6px 36px;

    .prices{
        
        padding-top:1.5rem;
        width:100%;
        display:flex;
        flex-direction:column;
        gap: 0.75rem;
        div{
            width:100%;
            display:flex;
            justify-content:space-between;
          
        }

        div:nth-child(1) {
            span:first-child {
                font-size:${({theme})=> theme.textSizes["size-14px"]};
                
            }
        }

        div:nth-child(2) {
            span:first-child {
                font-size:${({theme})=> theme.textSizes["size-14px"]};
                
            }
        }

        div:last-child {
            font-family:${({theme})=> theme.colors["base-title"]};
            font-size:${({theme})=> theme.textSizes["size-20px"]};
            font-weight:${({theme})=> theme.fontsWeight.boldRoboto};
        }
    }

    .buttonOrder {
        padding:.75rem .5rem;
        margin-top:1.5rem;
        width:100%;
        background-color:${({theme})=> theme.colors.yellow};
        border-radius:6px;
        color:white;
        font-size:${({theme})=> theme.textSizes["size-14px"]};
        font-weight:${({theme})=> theme.fontsWeight.boldRoboto};
    }

    @media only screen and (min-width: 1150px) {
      width:54%;
      border-radius: 6px 36px 0 0;
    }

`;