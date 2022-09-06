
export interface Answer {
    answer: string
}

export const createCard = (obj: Answer): Answer => ({
    answer: obj.answer
})