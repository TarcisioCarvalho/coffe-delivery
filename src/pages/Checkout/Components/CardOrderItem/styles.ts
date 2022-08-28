import styled from "styled-components";


export const CardOrderItemContainer = styled.div`
width:100%;
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
        
        border:none;
        padding: 0.25rem;
        div {
            background-color:${({theme})=> theme.colors["base-button"]};
        }
        span {
            color:${({theme})=> theme.colors["base-title"]};
        }
        button {
            color:${({theme})=> theme.colors.purple};
        }
    }
    button {
        cursor: pointer;
        display:flex;
        align-items:center;
        gap: 0.25rem;;
        background-color:${({theme})=> theme.colors["base-button"]};
        border:none;
        padding: 0.25rem;
        font-size:${({theme})=> theme.textSizes["size-12px"]};
        transition: .3s;
        span {
            color:${({theme})=> theme.colors.purple};
        }
        &:hover{
            color:${({theme})=> theme.colors["purple-dark"]};
        }
    }
    h2 {
        font-size:${({theme})=> theme.textSizes["size-16px"]};
    }
}

.price{
    font-weight:${({theme})=> theme.fontsWeight.boldRoboto};
}

.addOrRemoveItens{
    flex-direction:column;
    gap: 0.5rem;
}

.buttonRemover:hover{
    background-color:${({theme})=> theme.colors["base-hover"]};
    color:${({theme})=> theme.colors["base-subtitle"]};
    span {
        color:${({theme})=> theme.colors["purple-dark"]};
    }
}


@media only screen and (min-width: 1150px) {
    width:37%;
}
`;