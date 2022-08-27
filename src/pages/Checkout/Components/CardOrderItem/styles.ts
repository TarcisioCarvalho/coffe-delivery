import styled from "styled-components";


export const CardOrderItemContainer = styled.div`
display:flex;
align-items:top;
justify-content:space-around;
gap:1.125rem;
border-bottom:1px solid #E6E5E5;
padding-top:1rem;
padding-bottom:1rem;
img {
    width:4rem;
    height:4rem;
}
div {
    display:flex;
    align-items:center;
    gap: 0.5rem;
    div {
        background-color:${({theme})=> theme.colors["base-button"]};
        border:none;
        padding: 0.25rem;
        span {
            color:${({theme})=> theme.colors["base-title"]};
        }
        button {
            color:${({theme})=> theme.colors.purple};
        }
    }
    button {
        display:flex;
        align-items:center;
        gap: 0.25rem;;
        background-color:${({theme})=> theme.colors["base-button"]};
        border:none;
        padding: 0.25rem;
        font-size:${({theme})=> theme.textSizes["size-12px"]};
        span {
            color:${({theme})=> theme.colors.purple};
        }
    }
    h2 {
        font-size:${({theme})=> theme.textSizes["size-16px"]};
    }
}

.price{
    font-weight:${({theme})=> theme.fontsWeight.boldRoboto};
}
`;