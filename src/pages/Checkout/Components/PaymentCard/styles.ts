import styled from "styled-components";


export const PaymentCardContainer = styled.div`
border-radius:6px;
background-color:${({theme})=> theme.colors["base-card"]};
padding:2rem;
display:flex;
flex-direction:column ;
align-items:center ;
width:100%;
gap:2rem;

p {
    text-align:center;
}
h3 {
    display:flex;
    align-items:center ;
    span {
        color:${({theme})=> theme.colors.purple};    
    }
}

.buttonsPayment{
    width:100%;
    display:flex;
    flex-direction:column;
    gap: 0.5rem;
    button {
        border:1px solid transparent;
        background-color:${({theme})=> theme.colors["base-button"]};
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        gap: 0.75rem;
        padding:1rem;
        border-radius:6px;
        font-size:${({theme})=> theme.textSizes["size-12px"]};
        span {
            color:${({theme})=> theme.colors.purple};
        }
        &:active{
            border: 1px solid #8047F8;
        }
    }
}

`;