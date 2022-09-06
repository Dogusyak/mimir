import styled from 'styled-components/macro'
import { AppBarButton } from '../controls/AppBarButton'
import { QueryNavLink } from '../../helpers/QueryNavLink'

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
  return <Bar><Header>✨ Mimir</Header>
    <QueryNavLink
      to="/"
    >
      <AppBarButton>New Game</AppBarButton>
    </QueryNavLink>

    <QueryNavLink
      to="/cards"
    >
      <AppBarButton>Manage Cards</AppBarButton>
    </QueryNavLink>
  </Bar>
}
