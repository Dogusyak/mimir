import { v4 as createId } from 'uuid'
import { Action } from 'models/Action'
import { State } from 'models/State'
import {Card, createCard} from 'models/cardModels/CardModel'
import { useEffect } from 'react'
import CardService from 'services/CardService'

export function cardReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'get-cards':
      let cards: Card[]
      useEffect(() => {  //With first rendering executed. It is a kind of on mount. When cards array has a new element then it will be executed again.
        console.log('card mounted ')
        const onMount = async () => {
          cards = await CardService.getCards()
          state.cards = [...cards];
        }
        onMount()

        return () => {
          console.log('card unmounted')
        }
      }, []);
      return state;

      
      case 'update-card':
          return {
              ...state, card: {
                  id: action.card.id,
                  front: action.card.front,
                  back: action.card.back,
              }
          }
    case 'add-card':
      let existingCard = state.cards.find(
        card => card.id === action.card.id
      )
          if (existingCard) {
              const updateCard = {
                  ...existingCard,
                  front: action.card.front,
                  back: action.card.back
              }
        return {
          ...state,
          cards: state.cards.map(card => {
            if (card.id === updateCard?.id) {
              return updateCard
            }
            return card
          })
        }
      }
      return {
        ...state,
        cards: [...state.cards, createCard(action.card)]
      }
    case 'remove-card':
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.cardId)
      }
  }
}

export const initialCardPageState: State = {
    card: {} as Card,
    cards: 	[]
}