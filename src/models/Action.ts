import { Card } from './cardModels/CardModel'

type GetCards = {
    type: 'get-cards'
  }

type UpdateCard = {
  type: 'update-card'
  card: Card
}

type AddCard = {
  type: 'add-card'
  card: Card
}

type RemoveCard= {
  type: 'remove-card'
  cardId: string
}

export type Action = UpdateCard | AddCard | RemoveCard| GetCards
