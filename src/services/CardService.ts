import { Card } from "models/cardModels/CardModel";

const Url = 'http://localhost:3003/api/cards';

async function getCards() {
  try {
    const response = await fetch(Url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function addCard(card: Card) {
  try {
    const options = {
      method: 'POST',
      headers: new Headers({ accept: 'application/json', 'content-type': 'application/json', }),
      body: JSON.stringify(card),
    };

    const response = await fetch(Url, options);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    else {
      return 'success';
    }

  } catch (err) {
    console.log(err);
  }
}

async function updateCard(card: Card) {
  const cardId = card.id

  try {

    const options = {
      method: 'PUT',
      headers: new Headers({ accept: 'application/json', 'content-type': 'application/json', }),
      body: JSON.stringify(card),
    };

    const response = await fetch(Url + '/' + cardId, options);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    else {
      return 'success';
    }
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteCard(card: Card) {
  const cardId = card.id

  const options = {
    method: 'DELETE',
    headers: new Headers({ accept: 'application/json', 'content-type': 'application/json', }),
    body: JSON.stringify(card),
  };

  try {
    const response = await fetch(Url + '/' + cardId, options);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    else {
      return 'success';
    }
  }
  catch (err) {
    console.log(err);
  }
}

const CardService = {
  getCards,
  addCard,
  updateCard,
  deleteCard,
};

export default CardService;
