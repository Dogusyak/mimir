import styled from 'styled-components/macro'
import { Button } from '../../controls/Button'
import { Card } from '../../../models/cardModels/CardModel'
import { useReducer } from 'react'

interface Props {
  addCard: (card: Card) => void
  updateCard: (card: Card) => void
}

const card = {} as Card;

type Action = SetFrontAction | SetBackAction | ClearAllAction

type SetFrontAction = {
  type: 'set-front'
  front: string
}

type SetBackAction = {
  type: 'set-back'
  back: string
}

type ClearAllAction = {
  type: 'clear-all'
}

function reducer(state: Card, action: Action): Card {
  switch (action.type) {
    case 'set-front':
      return { ...state, front: action.front }
    case 'set-back':
      return { ...state, back: action.back }
    case 'clear-all':
      return { id: '', front: '', back: '' }
  }
}


export const CardForm = (props: Props) => {

  const [cardState, dispatch] = useReducer(reducer, card)

  const add = () => {
    props.addCard(cardState)
    dispatch({ type: 'clear-all' });
  }

  const update = () => {
    props.updateCard(cardState)
    dispatch({ type: 'clear-all' });
  }

  return (
    <Container>
      <Input value={cardState.front} onChange={e => dispatch({ type: 'set-front', front: e.target.value })} placeholder="Front" />
      <Input value={cardState.back} onChange={e => dispatch({ type: 'set-back', back: e.target.value })} placeholder="Back" />
      {props.addCard.name === 'add' ? (<Button onClick={add}>Add</Button>) : <Button onClick={update}>Update</Button>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const Input = styled.input`
  flex: 1;
`
