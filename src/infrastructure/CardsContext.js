import React,{ useMemo, useState, createContext } from "react";
import {Card} from '../models/cardModels/CardModel'

const CardsContext = React.createContext(null);
const CardsDispatchContext = React.createContext(null);

const CardsProvider = ({ children }) => {
    const [Cards, setCards] = useState({});
    useMemo(() => {
        return { Cards, setCards };
    }, [Cards]);

    return (
        <CardsContext.Provider value={Cards}>
            <CardsDispatchContext.Provider value={setCards}>{children}</CardsDispatchContext.Provider>
        </CardsContext.Provider>
    );
}

export { CardsProvider, CardsContext, CardsDispatchContext }