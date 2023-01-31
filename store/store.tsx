import {configureStore} from '@reduxjs/toolkit';
import deckReducer from '../features/deck/deck-slice';

//Create the store
export  const store = configureStore({
    reducer: {
        deck: deckReducer
    }
})
