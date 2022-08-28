import React from 'react'
import { IconContainer, SuccessContainer } from './styles'
import successImg from '../../assets/img/success.png';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

export const Success = () => {
  return (
    <SuccessContainer>
        <div>
            <h2>Uhu ! Pedido Confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
           <ul>
                <li>
                    <IconContainer colorIcon = 'purple'><MapPin size={16}/></IconContainer>
                    <div>
                        <p>Entrega em Rua João Daniel Martinelli,</p>
                        <p> 102Farrapos - Porto Alegre, RS</p>
                    </div>
                </li>
                <li>
                    <IconContainer colorIcon='yellow'><Timer size={16}/></IconContainer>
                    <div>
                        <p>Previsão de entrega</p>
                        <p>20 min - 30 min</p>
                    </div>
                </li>
                <li>
                    <IconContainer colorIcon='yellow-dark'><CurrencyDollar size={16}/></IconContainer>
                    <div>
                        <p>Pagamento na entrega</p>
                        <p>Cartão de Crédito</p>
                    </div>
                </li>
           </ul>
        </div>
        <div>
            <img src={successImg}/>
        </div>
       
    </SuccessContainer>
  )
}
