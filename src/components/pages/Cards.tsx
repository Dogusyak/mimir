import { CardForm } from './components/CardForm'
import { useEffect, useState, useContext } from 'react'
import { Card } from '../../models/CardModel'
import { CardList } from './components/CardList'
import CardService from 'services/CardService'
import { CardContext } from 'store/cardContext'

export function Cards() {
	const [front, setFront] = useState<string>('')
	const [back, setBack] = useState<string>('')
	const { cards, dispatch } = useContext(CardContext)

	useEffect(() => {
		console.log('cards mounted ')
		const onMount = async () => {
			const cards = await CardService.getCards()
			dispatch({ type: 'set-cards', cards })
		}
		onMount()

		return () => {
			console.log('cards unmounted')
		}
	}, []);

	const add = (card: Card) => {

		const add = async () => {
			const response = await CardService.addCard(card);
			if (response) {
				const card = response;
				dispatch({ type: 'add-card', card })
			}
		}
		add()
	}

	const remove = (card: Card) => {
		const remove = async () => {
			const response = await CardService.deleteCard(card);
			if (response === 'success') {
				//TODO show an alert.
				dispatch({ type: 'remove-card', card })
			}
		}
		remove()
	}

	return (
		<>
			<CardForm
				addCard={add}
				updateCard={add}
				setFront={setFront}
				front={front}
				setBack={setBack}
				back={back}
			/>
			<CardList
				cards={cards}
				remove={remove}
			/>
		</>
	)
}