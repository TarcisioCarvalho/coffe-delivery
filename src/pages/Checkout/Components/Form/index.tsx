import { MapPin } from 'phosphor-react'
import React from 'react'
import { Input } from './Input'
import { FormContainer } from './styles'

export const Form = () => {

    

  return (
    <FormContainer>
            <div>
                
                <h2><span><MapPin/></span>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
           <Input placeholder = 'Cep' sizeProps ='100%' type = 'number' />
           <Input placeholder = 'Rua' sizeProps ='100%' disable = {true}/>
           <Input placeholder = 'Número' sizeProps ='25%' disable = {true}/>
           <Input placeholder = 'Complemento' sizeProps ='70%' />
           <Input placeholder = 'Bairro' sizeProps ='100%' disable = {true}/>
           <Input placeholder = 'Cidade' sizeProps ='70%' disable = {true}/>
           <Input placeholder = 'UF' sizeProps ='25%' disable = {true}/>
    </FormContainer>
  )
}
