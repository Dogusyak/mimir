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

  const response = await fetch(Url + { cardId }, { method: 'PUT', body: JSON.stringify(card) });
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  else {
    return 'success';
  }

  console.log(response.json());
}

async function deleteCard(card: Card) {
  const cardId = card.id

  const response = await fetch(Url + { cardId }, { method: 'DELETE', body: JSON.stringify(card) });
  const data = await response.json();

  console.log(data);
}


const CardService = {
  getCards,
  addCard,
  updateCard,
  deleteCard,
};

export default CardService;
