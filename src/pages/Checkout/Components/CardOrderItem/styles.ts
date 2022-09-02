import styled from "styled-components";


export const CardOrderItemContainer = styled.div`
width:100%;
display:flex;
align-items:top;
justify-content:space-around;
gap:0.125rem;
border-bottom:1px solid #E6E5E5;
padding-top:1rem;
padding-bottom:1rem;

img {
    width:4rem;
    height:4rem;
}
div {
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 0.5rem;
   
    div {
        flex-direction:row;
        border:none;
        
        padding: 0.25rem;
       
        div {
            
            //background-color:${({theme})=> theme.colors["base-button"]};
        }
        span {
            color:${({theme})=> theme.colors["base-title"]};
        }
        button {
            color:${({theme})=> theme.colors.purple};
        }
    }
    button {
        margin-left:.5rem;
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
    width:1rem;
    font-weight:${({theme})=> theme.fontsWeight.boldRoboto};
    font-size:${({theme})=> theme.textSizes["size-10px"]};
}

.addOrRemoveItens{
    flex-direction:column ;
    align-items:center ;
  
    div:first-child{
        width:100px;
    }
    div {
        background-color:${({theme})=> theme.colors["base-button"]};
    }
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
    gap:1.125rem;
    .addOrRemoveItens{
        flex-direction:row;
    }
    .price{
        font-size:${({theme})=> theme.textSizes["size-16px"]};
    }
}
`;