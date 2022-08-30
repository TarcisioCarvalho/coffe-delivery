import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { CoffeContext, CoffeContextProvider } from "./contexts/CoffeContext"
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
        <CoffeContextProvider>
          <Router/>
        </CoffeContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
