import { CardForm } from './components/CardForm'
import { useEffect, useState, useContext } from 'react'
import { Card, createCard } from '../../models/CardModel'
import { CardList } from './components/CardList'
import CardService from 'services/CardService'
import { AppContext } from 'store/context'

export function Cards() {
	const [front, setFront] = useState<string>('')
	const [back, setBack] = useState<string>('')
	const { cards, dispatch } = useContext(AppContext)

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
		const createdCard =createCard(card);
		const add = async () => {
			const response = await CardService.addCard(createdCard);
			if (response === 'success') {
				//TODO show an alert.
				dispatch({ type: 'add-card', createdCard })
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