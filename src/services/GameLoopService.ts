import { Card } from "models/CardModel";
import { Answer } from "models/AnswerModel";

const Url = 'http://localhost:3003/api/game';

async function getCurrentGame() {
    try {
        const options = {
            method: 'GET',
            headers: new Headers({ accept: 'application/json', 'content-type': 'application/json', }),
        };

        const response = await fetch(Url, options);

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

async function startANewGame() {
    try {
        const options = {
            method: 'POST',
            headers: new Headers({ accept: 'application/json', 'content-type': 'application/json', })
        };

        const response = await fetch(Url, options);

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        else {
            return response.json();
        }

    } catch (err) {
        console.log(err);
    }
}

async function SetAnswerForCurrentCard(answer: Answer) {
    try {
        const options = {
          method: 'PATCH',
          headers: new Headers({ accept: 'application/json', 'content-type': 'application/json', }),
          body: JSON.stringify(answer),
        };
    
        const response = await fetch(Url, options);
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        else {
          return response.json();
        }
    
      } catch (err) {
        console.log(err);
      }
}

async function deleteCurrentGame() {
    try {
        const options = {
            method: 'DELETE',
            headers: new Headers({ accept: 'application/json', 'content-type': 'application/json', })
        };

        const response = await fetch(Url, options);

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        else {
            return response.ok
        }

    } catch (err) {
        console.log(err);
    }
}


const GameLoopService = {
    getCurrentGame,
    startANewGame,
    SetAnswerForCurrentCard,
    deleteCurrentGame,
};

export default GameLoopService;
