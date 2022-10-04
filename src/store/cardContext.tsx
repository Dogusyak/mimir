import { Action } from 'models/CardAction'
import { State } from 'models/CardState'
import { createContext, ReactNode, useReducer } from 'react'
import { cardReducer, InitialAppState } from './cardReducer'

interface AppState extends State {
  dispatch: (action: Action) => void
}

const initialState: AppState = {
  ...InitialAppState,
  dispatch: (action: Action) => { }
}

export const CardContext = createContext<AppState>(initialState)

interface Props {
  children: ReactNode
}

export const CardProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cardReducer, initialState)

  const store = {
    ...state,
    dispatch
  }

  console.log('render AppProvider', state.cards)

  return <CardContext.Provider value={store}>{children}</CardContext.Provider>
}
