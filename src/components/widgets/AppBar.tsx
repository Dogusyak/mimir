import { useContext } from 'react'
import { AppBarButton,AppBarButtonNoBorder } from '../controls/AppBarButton'
import { QueryNavLink } from '../../helpers/QueryNavLink'
import { GameLoopContext } from 'store/gameLoopContext'
import { Bar } from '../controls/Bar'
import { Header } from '../controls/Header'
import { Solved } from 'models/GameModel'

function determineGameTitle(solved: Solved[]) {
  let text = 'New Game';
  if (solved) {
    const index = solved.length + 1;
    switch (index) {
      case 1:
      case 2:
      case 3:
        {
          return text = "Solve #" + index;
        }
      case 4: {
        return text = "Finished"
      }
      default: {
        return text = "Something went wrong!"
      }
    }
  }
  return text;
}

export const AppBar = () => {
  const { game } = useContext(GameLoopContext)
  const text = determineGameTitle(game.solved);

  return <Bar><Header>✨ Mimir</Header>
    <QueryNavLink
      to="/"
    >
      <AppBarButton>{text}</AppBarButton>
    </QueryNavLink>

    <QueryNavLink
      to="/cards"
    >
      <AppBarButtonNoBorder>Manage Cards</AppBarButtonNoBorder>
    </QueryNavLink>
  </Bar>
}
