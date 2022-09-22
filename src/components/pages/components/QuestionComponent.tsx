import { Game } from "models/GameModel"

interface Props {
  game: Game
}

export function QuestionComponent(game : Props) {
  return (
    <>
      You are in question component game
    </>
  )
}