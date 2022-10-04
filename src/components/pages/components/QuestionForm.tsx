import styled from 'styled-components/macro'
import { Button } from '../../controls/Button'
import { TextInput } from 'components/controls/TextInput'
import { Answer } from 'models/AnswerModel'
import { FancyCard } from 'components/controls/FancyCard'

interface Props {
    submit: (answer: Answer) => void
    setAnswer: (answer: string) => void
    front: string
    answer: string
}

export const QuestionForm = (props: Props) => {

    const submit = () => {
        props.submit({ answer: props.answer } as Answer)
        props.setAnswer('')
    }

    return (
        <Container>
            <FancyCard>{props.front}</FancyCard>
            <TextInput value={props.answer} onChange={e => props.setAnswer(e)} placeholder="Answer" />
            <Button onClick={submit}>Submit</Button>
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