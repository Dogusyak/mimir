import { Action } from 'models/Action'
import { State } from 'models/State'
import { createCard } from 'models/CardModel'

export function cardReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'set-cards':
      return {
        ...state,
        cards: action.cards
      }
    case 'add-card':
      return {
        ...state,
        cards: [...state.cards, action.createdCard]
      }
    case 'update-card':
      return {
        ...state,
        cards: [...state.cards.filter(card => card.id !== action.card.id), action.card]
      }
    case 'remove-card':
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.card.id)
      }
  }
}

export const InitialAppState: State = {
  cards: []
}