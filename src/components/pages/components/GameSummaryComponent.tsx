import { Game } from "models/GameModel"
import {Button} from './../../controls/Button'

interface Props {
  deleteCurrentGame: () => void
  startNewGame: () => void
  game: Game
}

export function GameSummaryComponent(props: Props) {
  const tableHeader = <tr>
    <th>Front</th>
    <th>Back</th>
    <th>Your Answer</th>
    <th>Accepted</th>
  </tr>
  const tableDate = props.game.solved.forEach((value, key) => {
    <tr key={key}>
      <td>{value.front}</td>
      <td>{value.back}</td>
      <td>{value.answer}</td>
      <td>{value.accepted}</td>
    </tr>
  });

  return (
    <>
    <Button onClick={()=>props.startNewGame()}>Start New Game</Button>
      {tableHeader}
      {tableDate}
    </>
  )
}
