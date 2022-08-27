import styled from "styled-components"

export const CheckOutContainer = styled.main`

    display:flex;
    flex-direction:column;
    gap:1rem;


    .prices{
        padding-left:1rem;
        padding-right:1rem;
        background-color:${({theme})=> theme.colors["base-card"]};
        border-radius: 6px 36px;
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
       
    }

    

`;

export const FormContainer = styled.form`

    background-color:${({theme})=> theme.colors["base-card"]};
    display:flex;
    flex-direction:column;
    gap:1rem;

    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding: 0.5rem;
        h2{
            color:${({theme})=> theme.colors["base-subtitle"]};
            display:flex;
            gap: 0.5rem;
            span{
                color:${({theme})=> theme.colors["yellow-dark"]};
            }
        }

        p {
            font-size:${({theme})=> theme.textSizes["size-14px"]};
        }
    }

`;

export const InputContainer = styled.input`
    background-color:${({theme})=> theme.colors["base-input"]};
    color:${({theme})=> theme.colors["base-label"]};
    padding: 0.75rem;
    border:1px solid #E6E5E5;
    border-radius:4px;
`;