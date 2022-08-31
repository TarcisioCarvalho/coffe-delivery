import styled from "styled-components";

export const FormContainer = styled.form`
    padding: 1rem;
    background-color:${({theme})=> theme.colors["base-card"]};
    display:flex;
    flex-direction:row;
    gap:1rem;
    flex-wrap:wrap ;
    border-radius:6px;
    height:100%;
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

    @media only screen and (min-width: 1150px) {
      width:69%;
    }

`;