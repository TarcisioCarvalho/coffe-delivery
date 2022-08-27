import React from 'react'
import { CardOrderItem } from '../CardOrderItem'
import { CardOrderContainer } from './styles'

export const CardOrder = () => {
  return (
    <CardOrderContainer>
        <CardOrderItem/>
        <CardOrderItem/>
        <CardOrderItem/>
        <CardOrderItem/>
        <CardOrderItem/>
       
    </CardOrderContainer>
  )
}
