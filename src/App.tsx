import { ThemeProvider } from "styled-components"
import { Card } from "./components/Card"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"



function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Card/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
