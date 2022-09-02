import React from 'react'
import { NavLink } from 'react-router-dom';
import { AddressContext } from '../../../../contexts/AddressContext';
import { CoffeContext } from '../../../../contexts/CoffeContext';
import { PaymentCardContext } from '../../../../contexts/PaymentCardContext';
import { PricesContainer } from './styles'

export const Prices = () => {

  const {coffesList,removeAllCoffes} = React.useContext(CoffeContext);
  const {cep,endereco,numero} = React.useContext(AddressContext);
  const {card} = React.useContext(PaymentCardContext);

  function checkCoditionsToCompleteTheOrder(){
    
    return !(coffesList?.length !== 0 && cep && endereco && card && numero?.length!==0)
  }

  const totalValue = coffesList?.reduce((previusValue,currentValue)=>{
    return (previusValue += (currentValue.quantidade!*currentValue.preco!))
  },0)
  
  return (
<PricesContainer className='prices'>

    <div><span>Total de itens</span><span>R$ {totalValue?.toFixed(2)}</span></div>
    <div><span>Entrega </span><span>3,50 R$</span></div>

    <div><span>Total</span><span>{(totalValue! + 3.5).toFixed(2)} R$</span></div>

    <NavLink to='/Success'>
      <button disabled={checkCoditionsToCompleteTheOrder()}
      onClick={()=> removeAllCoffes!()}
       className='buttonOrder'>
        Confirmar Pedido
      </button>
    </NavLink>
   
</PricesContainer>
  )
}
