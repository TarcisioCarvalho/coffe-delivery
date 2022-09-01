import React from 'react'
import { InputContainer } from './styles'

export const Input = (props:any) => {
  return (
    <InputContainer 
     placeholder={props.placeholder}
     sizeProps ={props.sizeProps}
      disabled = {props.disable}
      type = {props.type}
      >
    </InputContainer>
  )
}
