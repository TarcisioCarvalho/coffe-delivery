import { MapPin, ShoppingCart} from 'phosphor-react'
import { HeaderContainer } from './styles'
import logo from '../../assets/img/logo.svg';


export const Header = () => {
  const test = 0;
  return (
    <HeaderContainer>
        <img src={logo} alt="" />
        <nav>
            <div> <MapPin size={22} height={22}/> <span>Localidade</span>
            </div>
            <a href=""><ShoppingCart size={18} height={18}/>
            {test!==0?<div>{test}</div>:null}
             
             
             </a>
        </nav>
    </HeaderContainer>
  )
}
