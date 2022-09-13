import React,{ useMemo, useState, createContext,useContext,FC  } from "react";
import {Card, CardContextType} from '../models/cardModels/CardModel'

const CardsContext = createContext<CardContextType>({ cards: [], setCards: cards => console.warn('no cards provided.') });
const useCards = () => useContext(CardsContext);

//const CardsContext = createContext<Card[] | null>(null);
// const CardsDispatchContext = createContext<Card[] | null>(null);

// const CardsProvider:FC = ({children}) => {
//     const [Cards, setCards] = useState<Card[]| null>([]);
//     useMemo(() => {
//         return { Cards, setCards };
//     }, [Cards]);

//     return (
//         <CardsContext.Provider value={Cards}>
//             <CardsDispatchContext.Provider value={setCards}>{children}</CardsDispatchContext.Provider>
//         </CardsContext.Provider>
//     );
// }

export { /*CardsProvider,*/ CardsContext, useCards }