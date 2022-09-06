import { Card } from "models/cardModels/CardModel";

 async function getCards() {
    try {
        const response = await fetch('http://localhost:3003/api/cards', {
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

async function addCard(card:Card) {
  try {
    let bodyparsed = JSON.stringify(card);
    const response = await fetch('http://localhost:3003/api/cards', {
      method: 'POST',
      body: bodyparsed,
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

async function updateCard(card:Card) {
    const cardId = card.id
    const url = "http://localhost:3003/api/cards/"+{cardId}
 
    const response = await fetch(url, {method: 'PUT', body: JSON.stringify(card)});
    const data = await response.json();
   
    console.log(data);
}

async function deleteCard(card:Card) {
    const cardId = card.id
    const url = "http://localhost:3003/api/cards/"+{cardId}
 
    const response = await fetch(url, {method: 'DELETE', body: JSON.stringify(card)});
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
