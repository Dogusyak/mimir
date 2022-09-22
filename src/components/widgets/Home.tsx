import styled from 'styled-components/macro'
import { useEffect, useState, useContext } from 'react'
import { AllStyledComponents} from '../../toDelete/AllStyledComponents'
import { QueryNavLink } from '../../helpers/QueryNavLink'
import {InitialGameComponent} from '../pages/components/InitialGameComponent'
import GameLoopService from 'services/GameLoopService'
import {GameLoopContext } from 'store/gameLoopContext'
import { QuestionComponent } from 'components/pages/components/QuestionComponent'

export function Home() {
  const { game, dispatch } = useContext(GameLoopContext)

  const startNewGame = () => {
    const startNewGame = async () => {
      const response = await GameLoopService.startANewGame();
      if (response) {
        const game = response;
        dispatch({ type: 'start-a-new-game', game })
      }
    }
    startNewGame()
  }
  return <Main>
    {!game.solved ? (<InitialGameComponent startNewGame={startNewGame} />) :
      (<QuestionComponent game={game} />)
    }
  </Main>
}

const Main = styled.main`
  margin: 20px;
  height: 100%;
`
