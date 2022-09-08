import { CardForm } from './components/CardForm'
import {FancyList} from '../controls/FancyList'
import {FancyItem} from '../controls/FancyItem'
import { useEffect, useState } from 'react'
import {Card,createCard} from '../../models/cardModels/CardModel'
import { CardList } from './components/CardList'
import CardService from 'services/CardService'
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export function CardEdit() {
	const navigate = useNavigate()

	type CardEditParams = {
		id: string
	}

	const { id } = useParams<CardEditParams>()

	const [card, setCard] = useState<Card>()

	useEffect(() => {
		const card = fetchCardDetails(String(id))
		setCard(card)
	  }, [id])

	  function fetchCardDetails(id: string) {
		//return cards.find(card => card.id === id)
		return {} as Card
	  }

    const update = (obj: Card) => {
        const update = async () => {
			const response = await CardService.updateCard(obj);
			if (response === 'success') {
				navigate('/cards') //Todo navigate does not function correctly.
			}
		}
		update()
	}

	return (
		<>
			<CardForm
				addCard={update}
				updateCard={update} />
		</>
	)
}