import { CardForm } from './components/CardForm'
import {FancyList} from '../controls/FancyList'
import {FancyItem} from '../controls/FancyItem'
import { useEffect, useState } from 'react'
import {Card, CARD_DATA, createCard} from '../../models/cardModels/CardModel'
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
	const [front, setFront] = useState<string>('')
	const [back, setBack] = useState<string>('')


	useEffect(() => {
		const card = fetchCardDetails(String(id))
		setCard(card)
	  }, [id])

	  function fetchCardDetails(id: string) {
		const cards = CARD_DATA;
		return cards.find(record => record.id === id)
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
            updateCard={update}
            setFront={setFront}
			front={front}
			setBack = {setBack}
            back={back} />
        </>
    )
}