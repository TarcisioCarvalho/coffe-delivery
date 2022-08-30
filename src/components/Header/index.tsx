import { MapPin, ShoppingCart} from 'phosphor-react'
import { HeaderContainer } from './styles'
import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import { CoffeContext } from '../../contexts/CoffeContext';
import React from 'react';


export const Header = () => {

  const {coffesList,addCoffes} = React.useContext(CoffeContext);

 

  return (
    <HeaderContainer>
        <NavLink to='/'>
            <img src={logo} alt="" />
        </NavLink>
        
        <nav>
            <div> <MapPin size={22} height={22}/> <span>Localidade</span>
            </div>
            <NavLink to='Checkout'><ShoppingCart size={18} height={18}/>
            {coffesList?.length!==0?<div>{coffesList?.reduce((acc,currentValue)=>{
              return acc + currentValue.quantidade!;
            },0)}</div>:null}
             
             
             </NavLink>
        </nav>
    </HeaderContainer>
  )
}
