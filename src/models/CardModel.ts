import { v4 as uuid } from 'uuid'

export interface Card {
	id: string
	front: string
    back: string
}

export type CardContextType = {
	cards: Card[];
	setCards: (cards: Card[]) => void;
};

export const createCard = (obj:Card): Card => ({
	id: uuid(), //TODO id will be removed.
	front: obj.front,
	back: obj.back,
})