import { Action } from 'models/CardAction'
import { State } from 'models/CardState'

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
        cards: [...state.cards, action.card]
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