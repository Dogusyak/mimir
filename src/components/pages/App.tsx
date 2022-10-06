import { useContext, useEffect } from 'react'
import GameLoopService from 'services/GameLoopService'
import { GameLoopContext } from 'store/gameLoopContext'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../widgets/Layout'
import { Home } from '../widgets/Home'
import { Cards } from './Cards';
import { CardEdit } from './CardEdit';

function App() {
  const { game, dispatch } = useContext(GameLoopContext)

  /*
  If user refreshes the browser either on cards page or on game page,
  the button name will be on its last state.
  StartNewGame, Solve #1, Solve #2, Solve #3 or Finished.
  As well as the last state of the game will be retrived and game will be dispatched.
  It means game will also be on its last state.
  */
  useEffect(() => {
    console.log('game mounted ')
    const onMount = async () => {
      const response = await GameLoopService.getCurrentGame()
      if (response) {
        const game = response;
        dispatch({ type: 'set-current-game', game })
      }
    }
    onMount()

    return () => {
      console.log('game unmounted')
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="cards/:id" element={<CardEdit />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App;
