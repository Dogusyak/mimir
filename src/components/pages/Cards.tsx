import { CardForm } from './components/CardForm'
import {FancyList} from '../controls/FancyList'
import {FancyItem} from '../controls/FancyItem'
import { useEffect, useState } from 'react'
import {Card, createCard} from '../../models/cardModels/CardModel'
import { CardList } from './components/CardList'
import CardService from 'services/CardService'
import { useNavigate } from "react-router-dom";
import { useReducer,useContext } from 'react'
import { cardReducer, initialCardPageState } from '../../Utils/cardReducer'
//import { CardsDispatchContext } from 'infrastructure/CardsContext';

export function Cards() {
	const [front, setFront] = useState<string>('')
	const [back, setBack] = useState<string>('')
	const [state, dispatch] = useReducer(cardReducer, initialCardPageState)
	const [cards, setCards] = useState<Card[]>([])

	useEffect(() => {  //With first rendering executed. It is a kind of on mount. When cards array has a new element then it will be executed again.
		console.log('card mounted ')
		const onMount = async () => {
			const cards = await CardService.getCards()
			//const setCards = CardsDispatchContext;
			//setCards();
			setCards(cards)
		}
		onMount()

		return () => {
			console.log('card unmounted')
		}
	}, []);

	const add = (card: Card) => dispatch({ type: 'add-card', card })
  
	const remove = (card: Card) =>
	  dispatch({ type: 'remove-card', card })

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