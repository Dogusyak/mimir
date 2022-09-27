import { Game } from "models/GameModel"

interface Props {
  game: Game
}

export function GameSummaryComponent({ game }: Props) {
  const tableHeader = <tr>
    <th>Front</th>
    <th>Back</th>
    <th>Your Answer</th>
    <th>Accepted</th>
  </tr>
  const tableDate = game.solved.forEach((value, key) => {
    <tr key={key}>
      <td>{value.front}</td>
      <td>{value.back}</td>
      <td>{value.answer}</td>
      <td>{value.accepted}</td>
    </tr>
  });

  return (
    <>
      {tableHeader}
      {tableDate}
    </>
  )
}
