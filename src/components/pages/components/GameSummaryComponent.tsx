import { Game, Solved } from "models/GameModel"
import { Button } from './../../controls/Button'
import {Table, TableHeader, TableBody, TableRow} from '../../controls/TableControls'

interface Props {
  deleteCurrentGame: () => void
  startNewGame: () => void
  game: Game
}

const generateTable = (values: Solved[]) => {
  const table = <Table id="summaryTable">
    <TableHeader id="summaryTableHeader">
      {generateTableHeaders()}
    </TableHeader>
    <TableBody id="summaryTableBody">
      {generateTableBody(values)}
    </TableBody>
  </Table>
  return table;
}

const generateTableHeaders = () => {
  return <TableRow id="headerRow">
    <th>Front</th>
    <th>Back</th>
    <th>Your Answer</th>
    <th>Accepted</th>
  </TableRow>
}

function generateTableBody(values: Solved[]) {
  return values.map((value => (
      <TableRow id={value.id}>
        <td>{value.front}</td>
        <td>{value.back}</td>
        <td>{value.answer}</td>
        <td>{value.accepted ? 'OK' : 'X'}</td>
      </TableRow>
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
