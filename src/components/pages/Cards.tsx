import { CardForm } from './components/CardForm'
import {FancyList} from '../controls/FancyList'
import {FancyItem} from '../controls/FancyItem'
import { useEffect, useState } from 'react'
import {Card, CARD_DATA, createCard} from '../../models/cardModels/CardModel'
import { CardList } from './components/CardList'
import CardService from 'services/CardService'
import { useNavigate } from "react-router-dom";

export function Cards() {

	const [CARD_DATA, setCards] = useState<Card[]>([])

	useEffect(() => {  //With first rendering executed. It is a kind of on mount. When cards array has a new element then it will be executed again.
		console.log('card mounted ')
		const onMount = async () => {
			const cards = await CardService.getCards()
			setCards(cards)
		}
		onMount()

		return () => {
			console.log('card unmounted')
		}
	}, []);

	const add = (obj: Card) => {
		const add = async () => {
			const response = await CardService.addCard(createCard(obj));
			if (response === 'success') {
				//TODO refresh list.
			}
		}
		add()
	}

    const remove = (id: string) => {
		const newList = CARD_DATA.filter(card => card.id !== id)
		setCards(newList)
	}

	return (
		<>
			<CardForm
				addCard={add}
				updateCard={add}
			/>
			<CardList
				cards={CARD_DATA}
				remove={remove}
			/>
		</>
	)
}

const DefaultData: Card[] = [
	{
		id: 'f64b0f31-7521-4695-b66a-f82a10522e46',
		front: 'Vergangenheit',
		back: 'Past',
	},
	{
		id: 'ecde4cc2-6a16-442d-bad7-ae6441191f27',
		front: 'Gegenwart',
		back: 'Present',
	},
	{
		id: 'dcac5e25-99bf-4939-9f7c-734bfb18ec0c',
        front: 'Zukunft',
		back: 'Future',
	}
]