import { useReducer } from 'react'
import { CardForm } from './components/CardForm'
import { FancyList } from '../controls/FancyList'
import { FancyItem } from '../controls/FancyItem'
import { useEffect, useState } from 'react'
import { Card, createCard } from '../../models/cardModels/CardModel'
import { CardList } from './components/CardList'
import CardService from 'services/CardService'
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { cardReducer, initialCardPageState } from '../../Utils/cardReducer'

export function CardEdit() {
	const navigate = useNavigate()

	type CardEditParams = {
		id: string
	}

	const { id } = useParams<CardEditParams>()

	const [state, dispatch] = useReducer(cardReducer, initialCardPageState)
	const [card, setCard] = useState<Card>()
	const [front, setFront] = useState<string>('')
	const [back, setBack] = useState<string>('')

	useEffect(() => {
		const card = fetchCardDetails(String(id))
		setCard(card)
	}, [id])

	function fetchCardDetails(id: string) {
		//return cards.find(card => card.id === id)
		return {} as Card
	}

	const update = (card:Card) => dispatch({ type: 'update-card', card })

	return (
		<>
			<CardForm
				addCard={update}
				updateCard={update}
				setFront={setFront}
				front={front}
				setBack={setBack}
				back={back}
				id={id} />
	
		</>
	)
}