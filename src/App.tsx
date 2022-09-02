import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { AddressContextProvider } from "./contexts/AddressContext"
import { CoffeContext, CoffeContextProvider } from "./contexts/CoffeContext"
import { PaymentCardContextProvider } from "./contexts/PaymentCardContext"
import { Checkout } from "./pages/Checkout"
import { Home } from "./pages/Home"
import { Success } from "./pages/Success"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"



function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      
      <BrowserRouter>
      <PaymentCardContextProvider>
          <AddressContextProvider>
            <CoffeContextProvider>
              <Router/>
            </CoffeContextProvider>
          </AddressContextProvider>
        </PaymentCardContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
