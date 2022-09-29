import styled from 'styled-components/macro'
import { useState, useContext } from 'react'
import { InitialGameComponent } from '../pages/components/InitialGameComponent'
import GameLoopService from 'services/GameLoopService'
import { GameLoopContext } from 'store/gameLoopContext'
import { QuestionComponent } from 'components/pages/components/QuestionComponent'
import { GameSummaryComponent } from 'components/pages/components/GameSummaryComponent'
import { Answer } from 'models/AnswerModel'
import { Game } from 'models/GameModel'

export function Home() {

  const [answer, setAnswer] = useState<string>('')
  const [index, setIndex] = useState<number>(0)
  const { game, dispatch } = useContext(GameLoopContext)

  const submit = (answer: Answer) => {
    const submit = async () => {
      const response = await GameLoopService.SetAnswerForCurrentCard(answer);
      if (response) {
        const game = response;
        dispatch({ type: 'set-answer-for-current-card', game })
      }
    }
    submit()
  }

  const startNewGame = () => {
    const startNewGame = async () => {
      if (game) {
        deleteCurrentGame();
      }
      const response = await GameLoopService.startANewGame();
      if (response) {
        const game = response;
        dispatch({ type: 'start-a-new-game', game })
      }
    }
    startNewGame()
  }

  const deleteCurrentGame = () => {
    const deleteCurrentGame = async () => {
      const isGameDeleted = await GameLoopService.deleteCurrentGame();
      if (isGameDeleted) {
        const game = {} as Game;
        dispatch({ type: 'delete-current-game', game })
      }
    }
    deleteCurrentGame()
  }

  return <Main>{
    !game.solved ?
      (<InitialGameComponent startNewGame={startNewGame} />)
      : game.solved.length > 2 ?
        <GameSummaryComponent
          game={game}
          startNewGame={startNewGame}
          deleteCurrentGame={deleteCurrentGame} />
        : (<QuestionComponent submit={submit}
          setAnswer={setAnswer}
          deleteCurrentGame={deleteCurrentGame}
          front={game.front}
          answer={answer}
          questionNumber={game.solved.length} />)}</Main>
}

const Main = styled.main`
  margin: 20px;
  height: 100%;
`
