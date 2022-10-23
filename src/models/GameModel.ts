export interface Game {
    front: string
    cardCount: number
    solved: Solved[]
}

export interface Solved {
    id: string
    front: string
    back: string
    answer: string
    accepted: boolean
}
