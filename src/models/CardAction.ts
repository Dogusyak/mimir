import { Card } from './CardModel'

type SetCardsAction = {
  type: 'set-cards'
  cards: Card[]
}

type AddCardAction = {
  type: 'add-card'
  card: Card
}

type UpdateCardAction = {
  type: 'update-card'
  card: Card
}

type RemoveCardAction = {
  type: 'remove-card'
  card: Card
}

export type Action = SetCardsAction | AddCardAction | UpdateCardAction | RemoveCardAction
