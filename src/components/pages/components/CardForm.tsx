import { ContainerAddCard } from '../../controls/Container'
import { ButtonWide } from '../../controls/Button'
import { TextInput } from 'components/controls/TextInput'
import { Card } from '../../../models/CardModel'

interface Props {
    addCard: (card: Card) => void
    updateCard: (card: Card) => void
    setFront: (front: string) => void
    setBack: (back: string) => void
    id?: string
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
        props.updateCard({ id: props.id, front: props.front, back: props.back } as Card)
        props.setFront('')
        props.setBack('')
    }

    return (
        <ContainerAddCard>
            <TextInput value={props.front} onChange={e => props.setFront(e)} placeholder="Front" />
            <TextInput value={props.back} onChange={e => props.setBack(e)} placeholder="Back" />
            {props.addCard.name === 'add' ? (<ButtonWide onClick={add}>Add</ButtonWide>) :
                <ButtonWide onClick={update}>Update</ButtonWide>}
        </ContainerAddCard>
    )
}
