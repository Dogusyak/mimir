import { Answer } from "models/AnswerModel"
import { ButtonWide } from './../../controls/Button'
import { QuestionForm } from "./QuestionForm"
import { Label } from '../../controls/Label'
import { ContainerAddCard } from '../../controls/Container'

interface Props {
  submit: (answer: Answer) => void
  setAnswer: (answer: string) => void
  deleteCurrentGame: () => void
  front: string
  answer: string
  questionNumber: number
  cardCount: number
}

function determineProgress(questionNumber: number, cardCount: number) {
  return Math.round(100 / cardCount * questionNumber);
}

export function QuestionComponent(props: Props) {

  const progressPercentage = determineProgress(props.questionNumber, props.cardCount);
  const progress = 'Progress ' + progressPercentage + '%'
  return (
    <>
      <ContainerAddCard>
        <Label>{progress}</Label>
        <ButtonWide onClick={() => props.deleteCurrentGame()}>Delete Game</ButtonWide>
      </ContainerAddCard>
      <QuestionForm submit={props.submit}
        setAnswer={props.setAnswer}
        front={props.front}
        answer={props.answer}
      />
    </>
  )
}
