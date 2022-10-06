import { Button } from './../../controls/Button'
import { DownUnderContainer } from './../../controls/DownUnderContainer'
import { Info } from './../../controls/Info'

interface Props {
  startNewGame: () => void
}

export const InitialGameComponent = ({ startNewGame }: Props) => {
  return (
    <>
      <DownUnderContainer>
        <Button onClick={() => startNewGame()}>Start New Game</Button>
        <Info>No running game.</Info>
      </DownUnderContainer>
    </>
  )
}