import { Answer } from "models/AnswerModel"
import { Game } from "models/GameModel"
import { QuestionForm } from "./QuestionForm"

interface Props {
  submit: (answer: Answer) => void
  setAnswer: (answer: string) => void
  front: string
  answer: string
}

export function QuestionComponent(props: Props) {
  return (
    <>
      <QuestionForm submit={props.submit}
        setAnswer={props.setAnswer}
        front={props.front}
        answer={props.answer}
      />
    </>
  )
}