import styled, { css, createGlobalStyle } from 'styled-components/macro'
import {Button} from './../../controls/Button'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const Color = {
    Blue: 'blue'
  }

const Message = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  font-size: 35px;
  color: ${Color.Blue};
  opacity: 0.6;
`

interface Props {
	startNewGame: () => void
}

export const InitialGameComponent= ({ startNewGame}: Props) => {
    return (
      <>
        <Container>
        <Button onClick={()=>startNewGame()}>Start New Game</Button>
         <Message>No running game.</Message>
        </Container>
      </>
    )
  }