import { Answer } from "models/AnswerModel"
import { Button } from './../../controls/Button'
import { QuestionForm } from "./QuestionForm"

interface Props {
  submit: (answer: Answer) => void
  setAnswer: (answer: string) => void
  deleteCurrentGame: () => void
  front: string
  answer: string
}

export function QuestionComponent(props: Props) {
  return (
    <>
      <Button onClick={() => props.deleteCurrentGame()}>Delete Game</Button>
      <QuestionForm submit={props.submit}
        setAnswer={props.setAnswer}
        front={props.front}
        answer={props.answer}
      />
    </>
  )
}