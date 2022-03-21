import React from 'react'
import { useSelector } from 'react-redux'

export default function Card() {
  const cards = useSelector(state => state.cardsReducer.cards);
  console.log(cards);
  return (
    <div>Card</div>
  )
}
