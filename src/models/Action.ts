import { Card } from './cardModels/CardModel'

type AddCard = {
  type: 'add-card'
  card: Card
}

type RemoveCard = {
  type: 'remove-card'
  cardId: string
}

export type Action = AddCard | RemoveCard
