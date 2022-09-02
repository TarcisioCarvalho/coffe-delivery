import React from 'react';

export enum TypesOfPayment{
    cartaoDeCredito = 'Cartão de Crédito',
    cartaoDeDebito = 'Cartão de Débito',
    dinheiro = 'Dinheiro'
}

interface PaymentCard{
    card: TypesOfPayment | undefined;
    selectPaymentCard:(card:TypesOfPayment) => void;
}

export const PaymentCardContext = React.createContext({} as PaymentCard);

export const PaymentCardContextProvider = ({children}:any) => {

    const [card,setCard] = React.useState<TypesOfPayment>();

    function selectPaymentCard(card:TypesOfPayment){
        setCard(card);
    }

  return (
    <PaymentCardContext.Provider value={{card,selectPaymentCard}}>
        {children}
    </PaymentCardContext.Provider>
  )
}
