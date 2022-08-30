import React from 'react'
import { HomeContainer, SpanContainer } from './styles';
import homeImage from '../../assets/img/CoffePrincipal.png';
import { Card } from '../../components/Card';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { coffes } from '../../data/data';


interface SpanProps{
    variant?:'base-text' | 'purple' | 'yellow' | 'yellow-dark';
}

export const Home = () => {
  return (
    <HomeContainer>
        <div  className='homeTemplate'>
        <img src={homeImage} alt="Foto De um Café"  className='imageHome'/>
        <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <div>
                <ul>
                    <li>
                         <SpanContainer variant='yellow-dark'>
                            <ShoppingCart size={16}/>
                        </SpanContainer>
                        Compra simples e segura
                    </li>
                    <li>
                        <SpanContainer variant='base-text'>
                            <Package size={16}/>
                        </SpanContainer>
                        Embalagem mantém o café intacto
                    </li>
                    <li>
                        <SpanContainer variant='yellow'>
                            <Timer size={16}/>
                        </SpanContainer>
                        Entrega rápida e rastreada
                    </li>
                    
                    <li>
                        <SpanContainer variant='purple'>
                            <Coffee size={16}/>
                        </SpanContainer>
                        O café chega fresquinho até você
                    </li>
                </ul>
            </div>
        </div>
        </div>
       
        <h4>Nossos Cafés</h4>
        <main>
                {coffes.map(coffe => {
                    return (<Card 
                        img={coffe.img}
                        nome={coffe.nome}
                        descricao={coffe.descricao}
                        categorias={coffe.categoria}
                        preco={coffe.preco}
                        />)
                })}
        </main>
        
    </HomeContainer>
  )
}
