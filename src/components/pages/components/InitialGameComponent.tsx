import { ButtonWide} from './../../controls/Button'
import { DownUnderContainerNewGame} from './../../controls/DownUnderContainer'
import { Info } from './../../controls/Info'

interface Props {
  startNewGame: () => void
}

export const InitialGameComponent = ({ startNewGame }: Props) => {
  return (
    <>
      <DownUnderContainerNewGame>
        <ButtonWide onClick={() => startNewGame()}>Start New Game</ButtonWide>
        <Info>No running game.</Info>
      </DownUnderContainerNewGame>
    </>
  )
}