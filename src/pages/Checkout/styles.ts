import styled from "styled-components"

export const CheckOutContainer = styled.main`

    display:flex;
    flex-direction:column;
    gap:1rem;

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