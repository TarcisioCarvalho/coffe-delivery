import { MapPin, ShoppingCart} from 'phosphor-react'
import { HeaderContainer } from './styles'
import logo from '../../assets/img/logo.svg';


export const Header = () => {
  return (
    <HeaderContainer>
        <img src={logo} alt="" />
        <nav>
            <div> <MapPin size={22} height={22}/> <span>Localidade</span>
            </div>
            <a href=""><ShoppingCart size={18} height={18}/></a>
        </nav>
    </HeaderContainer>
  )
}
