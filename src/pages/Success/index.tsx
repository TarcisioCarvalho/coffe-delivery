import React from 'react'
import { IconContainer, SuccessContainer } from './styles'
import successImg from '../../assets/img/success.png';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { AddressContext } from '../../contexts/AddressContext';
import { PaymentCardContext } from '../../contexts/PaymentCardContext';

export const Success = () => {

    const {endereco} = React.useContext(AddressContext);
    const {card} = React.useContext(PaymentCardContext);

  return (
    
    <SuccessContainer>
        <div>
            <h2>Uhu ! Pedido Confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
           <ul>
                <li>
                    <IconContainer colorIcon = 'purple'><MapPin size={16}/></IconContainer>
                    <div>
                        <p>Entrega em Rua <b>{endereco?.rua}</b></p>
                        <p>{endereco?.cidade} - {endereco?.uf}</p>
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
                        <p>{card}</p>
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
