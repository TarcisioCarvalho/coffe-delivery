import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Checkout } from "./pages/Checkout"
import { Home } from "./pages/Home"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"



function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Checkout/>
      
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
