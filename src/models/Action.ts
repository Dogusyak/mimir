import { Card } from './cardModels/CardModel'

type AddCard = {
  type: 'add-card'
  card: Card
}
type UpdateCard = {
  type: 'update-card'
  card: Card
}

type RemoveCard = {
  type: 'remove-card'
  card: Card
}

export type Action = AddCard | UpdateCard | RemoveCard
