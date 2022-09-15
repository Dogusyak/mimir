import { Action } from 'models/Action'
import { State } from 'models/State'
import { createContext, ReactNode, useReducer } from 'react'
import { cardReducer, InitialAppState } from './cardReducer'

interface AppState extends State {
  dispatch: (action: Action) => void
}

const initialState: AppState = {
  ...InitialAppState,
  dispatch: (action: Action) => {}
}

export const AppContext = createContext<AppState>(initialState)

interface Props {
  children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cardReducer, initialState)

  const store = {
    ...state,
    dispatch
  }

  console.log('render AppProvider', state.cards)

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}
