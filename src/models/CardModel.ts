export interface Card {
	id: string
	front: string
	back: string
}

export type CardContextType = {
	cards: Card[];
	setCards: (cards: Card[]) => void;
};