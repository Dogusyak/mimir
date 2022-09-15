import styled from 'styled-components/macro'
import { Button } from '../../controls/Button'
import { TextInput } from 'components/controls/TextInput'
import { Card } from '../../../models/cardModels/CardModel'

interface Props {
  addCard: (card: Card) => void
  updateCard: (card: Card) => void
  setFront: (front: string) => void
  setBack: (back: string) => void
  id?:string|undefined
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
    props.updateCard({id:props.id, front: props.front, back: props.back } as Card)
    props.setFront('')
    props.setBack('')
  }

  return (
    <Container>
      <TextInput value={props.front} onChange={e => props.setFront(e)} placeholder="Front" />
      <TextInput value={props.back} onChange={e => props.setBack(e)} placeholder="Back" />
      {props.addCard.name === 'add' ? (<Button onClick={add}>Add</Button>) : <Button onClick={update}>Update</Button>}
    </Container>
  )
}

const Container = styled.div`
margin-top:20px;
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`