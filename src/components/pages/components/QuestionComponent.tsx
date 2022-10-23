import { Answer } from "models/AnswerModel"
import {Button, ButtonWide} from './../../controls/Button'
import { QuestionForm } from "./QuestionForm"
import { Label } from '../../controls/Label'
import {Container, ContainerAddCard} from '../../controls/Container'

interface Props {
  submit: (answer: Answer) => void
  setAnswer: (answer: string) => void
  deleteCurrentGame: () => void
  front: string
  answer: string
  questionNumber: number
}

function determineProgress(questionNumber: Number) {
  switch (questionNumber) {
    case 0:
      return 0;
    case 1:
      return 33;
    case 2:
      return 67;
    default:
      return -1;
  }
}

export function QuestionComponent(props: Props) {

  const progressPercentage = determineProgress(props.questionNumber);
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