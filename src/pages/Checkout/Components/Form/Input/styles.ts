import styled from "styled-components";

interface InputContainerProps{
    sizeProps:'100%';
}

export const InputContainer = styled.input<InputContainerProps>`

background-color:${({theme})=> theme.colors["base-input"]};
color:${({theme})=> theme.colors["base-label"]};
padding: 0.75rem;
border:1px solid #E6E5E5;
border-radius:4px;
width:${(props)=> props.sizeProps}
`;