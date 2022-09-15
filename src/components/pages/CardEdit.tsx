import { useContext } from 'react'
import { CardForm } from './components/CardForm'
import { useEffect, useState } from 'react'
import { Card } from '../../models/CardModel'
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from 'store/context';

export function CardEdit() {
	const navigate = useNavigate()

	type CardEditParams = {
		id: string
	}

	const { id } = useParams<CardEditParams>()

	const { cards, dispatch } = useContext(AppContext)
	const [front, setFront] = useState<string>('')
	const [back, setBack] = useState<string>('')

	useEffect(() => {
		const card = fetchCardDetails(String(id))
		setFront(card ? card.front : '');
		setBack(card ? card.back : '');
	}, [id])

	function fetchCardDetails(id: string) {
		return cards.find(card => card.id === id)
	}

	const update = (card: Card) => dispatch({ type: 'update-card', card })

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