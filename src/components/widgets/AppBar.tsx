import { useContext } from 'react'
import { AppBarButton, AppBarButtonNoBorder } from '../controls/AppBarButton'
import { QueryNavLink } from '../../helpers/QueryNavLink'
import { GameLoopContext } from 'store/gameLoopContext'
import { Bar } from '../controls/Bar'
import { Header } from '../controls/Header'
import { Solved } from 'models/GameModel'

function determineGameTitle(solved: Solved[], cardCount: number) {
  let text = 'New Game';
  if (solved) {
    const index = solved.length + 1;
    solved.length === cardCount ? text = "Finished" : text = "Solve #" + index;
  }
  return text;
}

export const AppBar = () => {
  const { game } = useContext(GameLoopContext)
  const text = determineGameTitle(game.solved, game.cardCount);

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
