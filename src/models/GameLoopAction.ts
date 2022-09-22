import { Game } from './GameModel'

type SetCurrentGame = {
    type: 'set-current-game'
    game: Game
}
type StartANewGame = {
    type: 'start-a-new-game'
    game: Game
}
type SetAnswerForCurrentCard = {
    type: 'set-answer-for-current-card'
    game: Game
}

type DeleteCurrentGame = {
    type: 'delete-current-game'
    game: Game
}

export type Action = SetCurrentGame | StartANewGame | SetAnswerForCurrentCard | DeleteCurrentGame
