import { Card } from "models/cardModels/CardModel";
import { Answer } from "models/gameLoopModels/Answer";

async function getCurrentGame() {
    const response = await fetch('http://localhost:3003/api/game');
    const data = await response.json();

    console.log(data);
}

async function startANewGame(card: Card) {

    const response = await fetch('http://localhost:3003/api/game', { method: 'POST' });
    const data = await response.json();

    console.log(data);
}

async function SetAnswerForCurrentCard(answer: Answer) {

    const response = await fetch('http://localhost:3003/api/game', { method: 'PATCH', body: JSON.stringify(answer) });
    const data = await response.json();

    console.log(data);
}

async function deleteCurrentGame() {
    const response = await fetch('http://localhost:3003/api/game', { method: 'DELETE' });
    const data = await response.json();

    console.log(data);
}


const GameLoopService = {
    getCurrentGame,
    startANewGame,
    SetAnswerForCurrentCard,
    deleteCurrentGame,
};

export default GameLoopService;
