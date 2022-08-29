import { Route,Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Checkout } from "./pages/Checkout"
import { Home } from "./pages/Home"
import { Success } from "./pages/Success"

export const Router = () => {
  return (
        <Routes>
            <Route path="/" element ={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="Checkout" element ={<Checkout/>}/>
                <Route path="Success" element = {<Success/>}/>
            </Route>
        </Routes>
  )
}
