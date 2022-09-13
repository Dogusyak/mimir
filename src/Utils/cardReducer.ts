import { v4 as createId } from 'uuid'
import { Action } from 'models/Action'
import { State } from 'models/State'
import {Card, createCard} from 'models/cardModels/CardModel'
import { useEffect } from 'react'
import CardService from 'services/CardService'

export function cardReducer(state: State, action: Action): State {
  switch (action.type) {  
    case 'add-card':
      // let existingCard = state.cards.find(
      //   card => card.id === action.card.id
      // )
      //     if (existingCard) {
      //         const updateCard = {
      //             ...existingCard,
      //             front: action.card.front,
      //             back: action.card.back
      //         }
      //   return {
      //     ...state,
      //     cards: state.cards.map(card => {
      //       if (card.id === updateCard?.id) {
      //         return updateCard
      //       }
      //       return card
      //     })
      //   }
      // }
      const add = async () => {
        const response = await CardService.addCard(createCard(action.card));
        if (response === 'success') {
          //TODO show an alert.
        }
      }
      add()
      return {
        ...state,
        // cards: [...state.cards, createCard(action.card)]
      }
    case 'remove-card':
      const remove = async () => {
        const response = await CardService.deleteCard(action.card);
        if (response === 'success') {
          //TODO show an alert.
        }
      }
      remove()
      return {
        ...state,
        // cards: [...state.cards, createCard(action.card)]
      }
  }
}

export const initialCardPageState: State = {
    card: {} as Card,
    cards: 	[]
}