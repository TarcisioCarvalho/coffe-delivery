import styled from "styled-components";


export const PricesContainer = styled.div`
 
        padding-left:1rem;
        padding-right:1rem;
        background-color:${({theme})=> theme.colors["base-card"]};
        border-radius: 6px 36px;
        padding-top:1.5rem;
        padding-bottom:1.5rem;
        width:100%;
        display:flex;
        flex-direction:column;
        gap: 0.75rem;
        margin-bottom:1rem;
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

        .buttonOrder {
        padding:.75rem .5rem;
        margin-top:1.5rem;
        width:100%;
        background-color:${({theme})=> theme.colors.yellow};
        border-radius:6px;
        color:white;
        font-size:${({theme})=> theme.textSizes["size-14px"]};
        font-weight:${({theme})=> theme.fontsWeight.boldRoboto};
        transition: 0.3s;
        cursor:pointer;

        &:hover{
            background-color:${({theme})=> theme.colors["yellow-dark"]};
        }
    }
       
    @media only screen and (min-width: 1150px) {  
    width:42.7%;
    border-radius:0 0 6px 36px;
    height:100%;
    }
`;