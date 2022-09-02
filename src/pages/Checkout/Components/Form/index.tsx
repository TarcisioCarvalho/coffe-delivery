import { MapPin } from 'phosphor-react'
import React from 'react'
import { AddressContext } from '../../../../contexts/AddressContext'
import { Input } from './Input'
import { FormContainer } from './styles'

export const Form = () => {

  const {cep,updateCep,endereco} = React.useContext(AddressContext);

  return (
    <FormContainer>
            <div>
                
                <h2><span><MapPin/></span>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
           <Input placeholder = 'Cep' sizeProps ='100%' 
            type = 'text' value={cep} updateCep={updateCep} length='8' pattern = '/d*'/>
           <Input placeholder = 'Rua' sizeProps ='100%' disable = {true} value={endereco?.rua}/>
           <Input placeholder = 'Número' sizeProps ='25%'/>
           <Input placeholder = 'Complemento' sizeProps ='70%' />
           <Input placeholder = 'Bairro' sizeProps ='100%' disable = {true} value ={endereco?.bairro}/>
           <Input placeholder = 'Cidade' sizeProps ='70%' disable = {true} value={endereco?.cidade}/>
           <Input placeholder = 'UF' sizeProps ='25%' disable = {true} value = {endereco?.uf}/>
    </FormContainer>
  )
}
