import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import React from 'react';
import { PaymentCardContainer } from './styles';
import { PaymentCardContext, TypesOfPayment } from '../../../../contexts/PaymentCardContext';

export const PaymentCard = () => {
    
    const {card,selectPaymentCard} = React.useContext(PaymentCardContext);
    

    function handleClick(card:TypesOfPayment){
        selectPaymentCard(card);
    }

    function checkTypeOfCard(cardOfButton:TypesOfPayment){
        return card === cardOfButton?{border:'1px solid #8047F8'}:{border:'none'};
    }

  return (
    <PaymentCardContainer>
       
        <h3> <span><CurrencyDollar/></span> Pagamento</h3>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <div className='buttonsPayment'>

            <button style={checkTypeOfCard(TypesOfPayment.cartaoDeCredito)} onClick={() => handleClick(TypesOfPayment.cartaoDeCredito)} >
                <span><CreditCard size={16}/></span>Cartão de Crédito
            </button>

            <button style={checkTypeOfCard(TypesOfPayment.cartaoDeDebito)} onClick={() => handleClick(TypesOfPayment.cartaoDeDebito)}>
                <span><Bank size={16}/></span>Cartão de Débito
            </button>

            <button style={checkTypeOfCard(TypesOfPayment.dinheiro)} onClick={() => handleClick(TypesOfPayment.dinheiro)}>
                <span><Money size={16}/></span> Dinheiro
            </button>

        </div>
    </PaymentCardContainer>
  )
}
