import { Action } from 'models/GameLoopAction'
import { State } from 'models/GameState'
import { createContext, ReactNode, useReducer } from 'react'
import { gameLoopReducer, InitialAppState } from './gameLoopReducer'

interface AppState extends State {
  dispatch: (action: Action) => void
}

const initialState: AppState = {
  ...InitialAppState,
  dispatch: (action: Action) => { }
}

export const GameLoopContext = createContext<AppState>(initialState)

interface Props {
  children: ReactNode
}

export const GameLoopProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(gameLoopReducer, initialState)

  const store = {
    ...state,
    dispatch
  }

  console.log('render AppProvider', state.game)

  return <GameLoopContext.Provider value={store}>{children}</GameLoopContext.Provider>
}
