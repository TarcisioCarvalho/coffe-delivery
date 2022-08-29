import { MapPin, ShoppingCart} from 'phosphor-react'
import { HeaderContainer } from './styles'
import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';


export const Header = () => {
  const test = 0;
  
  return (
    <HeaderContainer>
        <NavLink to='/'>
            <img src={logo} alt="" />
        </NavLink>
        
        <nav>
            <div> <MapPin size={22} height={22}/> <span>Localidade</span>
            </div>
            <NavLink to='Checkout'><ShoppingCart size={18} height={18}/>
            {test!==0?<div>{test}</div>:null}
             
             
             </NavLink>
        </nav>
    </HeaderContainer>
  )
}
