import styled from 'styled-components/macro'
import { AllStyledComponents} from '../../toDelete/AllStyledComponents'
import { QueryNavLink } from '../../helpers/QueryNavLink'
import {InitialGameComponent} from '../pages/components/InitialGameComponent'

const startNewGame = () => {
  alert('New game started')
}

export function Home() {
  return <Main> <InitialGameComponent startNewGame={startNewGame}/> </Main>
}

const Main = styled.main`
  margin: 20px;
  height: 100%;
`
