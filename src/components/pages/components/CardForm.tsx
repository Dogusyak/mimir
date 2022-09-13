import styled from 'styled-components/macro'
import { Button } from '../../controls/Button'
import { Card } from '../../../models/cardModels/CardModel'

interface Props {
  addCard: (card: Card) => void
  updateCard: (card: Card) => void
  setFront: (front: string) => void
  setBack: (back: string) => void
  front: string
  back: string
}

export const CardForm = (props: Props) => {

  const add = () => {
    props.addCard({ front: props.front, back: props.back } as Card)
    props.setFront('')
    props.setBack('')
  }

  const update = () => {
    props.updateCard({ front: props.front, back: props.back } as Card)
    props.setFront('')
    props.setBack('')
  }

  return (
    <Container>
      <Input value={props.front} onChange={e => props.setFront(e.target.value)} placeholder="Front" />
      <Input value={props.back} onChange={e => props.setBack(e.target.value)} placeholder="Back" />
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
