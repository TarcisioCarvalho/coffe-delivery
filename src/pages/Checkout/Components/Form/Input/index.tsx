import React from 'react'
import { AddressContext } from '../../../../../contexts/AddressContext';
import { InputContainer } from './styles';




export const Input = (props:any) => {
 
  return (
    <InputContainer onChange={(e)=> props.updateCep(e.target.value)}
      
      maxLength={props.length}
      value={props.value}
      placeholder={props.placeholder}
      sizeProps ={props.sizeProps}
      disabled = {props.disable}
      type = {props.type}

      >
    </InputContainer>
  )
}
