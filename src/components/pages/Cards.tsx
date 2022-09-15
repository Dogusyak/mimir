import { CardForm } from './components/CardForm'
import { useEffect, useState, useContext } from 'react'
import { Card } from '../../models/CardModel'
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

	const add = (card: Card) => dispatch({ type: 'add-card', card })

	const remove = (card: Card) => dispatch({ type: 'remove-card', card })

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