import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import React from 'react'
import { PaymentCardContainer } from './styles'

export const PaymentCard = () => {
  return (
    <PaymentCardContainer>
       
        <h3> <span><CurrencyDollar/></span> Pagamento</h3>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        <div className='buttonsPayment'>
            <button>
                <span><CreditCard size={16}/></span>Cartão de Crédito
            </button>
            <button>
                <span><Bank size={16}/></span>Cartão de Débito
            </button>
            <button>
                <span><Money size={16}/></span> Dinheiro
            </button>
        </div>
    </PaymentCardContainer>
  )
}
