import { Game, Solved } from "models/GameModel"
import { Button } from './../../controls/Button'
import {Table} from './../../controls/Table'

interface Props {
  deleteCurrentGame: () => void
  startNewGame: () => void
  game: Game
}

const generateTable = (values: Solved[]) => {
  const table = <table id="summaryTable">
    {generateTableHeaders()}
    {generateTableBody(values)}
  </table>
  return table;
}

const generateTableHeaders = () => {
  return <tr>
    <th>Front</th>
    <th>Back</th>
    <th>Your Answer</th>
    <th>Accepted</th>
  </tr>
}

function generateTableBody(values: Solved[]) {
  return values.map((value => (
      <tr>
        <td>{value.front}</td>
        <td>{value.back}</td>
        <td>{value.answer}</td>
        <td>{value.accepted ? 'ok' : 'X'}</td>
      </tr>
  )))
}

export function GameSummaryComponent(props: Props) {
  const table = generateTable(props.game.solved);
  return (
    <>
      <Button onClick={() => props.startNewGame()}>Start New Game</Button>
      {generateTable(props.game.solved)}
    </>
  )
}
