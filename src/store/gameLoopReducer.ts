import { Action } from 'models/GameLoopAction'
import { Game } from 'models/GameModel'
import { State } from 'models/GameState'

export function gameLoopReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'set-current-game':
            return {
                ...state,
                game: action.game
            }
        case 'start-a-new-game':
            return {
                ...state,
                game: action.game
            }
        case 'set-answer-for-current-card':
            return {
                ...state,
                game: action.game
            }
        case 'delete-current-game':
            return {
                ...state,
                game: action.game
            }
    }
}

export const InitialAppState: State = {
    game: {} as Game
}