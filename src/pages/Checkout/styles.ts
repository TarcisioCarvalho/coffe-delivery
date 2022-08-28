import styled from "styled-components"

export const CheckOutContainer = styled.main`

    display:flex;
    flex-direction:column;
    //gap:1rem;

    .formAndCardOrder{
        display:flex;
        flex-direction:column;
        gap:2rem;
      }

      .paymentCardAndPrices{
        display:flex;
        flex-direction:column;
        gap:2rem;
      }

@media only screen and (min-width: 1150px) {
      .formAndCardOrder{
       flex-direction:row;
      }

      .paymentCardAndPrices{
        flex-direction:row;
        justify-content:space-between;
      }
    }
    

    

`;



