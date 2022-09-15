import { v4 as createId } from 'uuid'
import { Action } from 'models/Action'
import { State } from 'models/State'
import {Card, createCard} from 'models/CardModel'
import { useEffect } from 'react'
import CardService from 'services/CardService'

export function cardReducer(state: State, action: Action): State {
  switch (action.type) { 
    case 'set-cards':
      return {
        ...state,
        cards: action.cards
      } 
    case 'add-card':
      const add = async () => {
        const response = await CardService.addCard(createCard(action.card));
        if (response === 'success') {
          //TODO show an alert.
        }
      }
      add()
      return {
        ...state,
        // cards: [...state.cards, createCard(action.card)]
      }
      case 'update-card':
      const update = async () => {
        const response = await CardService.updateCard(action.card);
        if (response === 'success') {
          //TODO show an alert.
        }
      }
      update()
      return {
        ...state,
        // cards: [...state.cards, createCard(action.card)]
      }
    case 'remove-card':
      const remove = async () => {
        const response = await CardService.deleteCard(action.card);
        if (response === 'success') {
          //TODO show an alert.
        }
      }
      remove()
      return {
        ...state,
        // cards: [...state.cards, createCard(action.card)]
      }
  }
}

export const InitialAppState: State = {
    cards: [] 
}