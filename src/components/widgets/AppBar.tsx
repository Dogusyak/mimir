import styled from 'styled-components/macro'
import { useContext } from 'react'
import { AppBarButton } from '../controls/AppBarButton'
import { QueryNavLink } from '../../helpers/QueryNavLink'
import { GameLoopContext } from 'store/gameLoopContext'

interface Props {
  newGame: () => void
}

const Bar = styled.div`
  background: lightblue;
  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`

const Header = styled.div`
  font-family: sans-serif;
  font-weight: bold;
  color: #815eff;
  font-size: 40px;
  margin: 5px 0;
`

export const AppBar = () => {
  const { game } = useContext(GameLoopContext)
  let text = 'New Game';
  if (game.solved) {
    const index = game.solved.length + 1;
    switch (index) {
      case 1:
      case 2:
      case 3:
        {
          text = "Solve #" +  index ;
          break;
        }
      case 4: {
        text = "Finished"
        break;
      }
      default: {
        text = "Something went wrong!"
        break;
      }
    }
  }

  return <Bar><Header>✨ Mimir</Header>
    <QueryNavLink
      to="/"
    >
      <AppBarButton>{text}</AppBarButton>
    </QueryNavLink>

    <QueryNavLink
      to="/cards"
    >
      <AppBarButton>Manage Cards</AppBarButton>
    </QueryNavLink>
  </Bar>
}
