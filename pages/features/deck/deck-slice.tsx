import {createSlice} from '@reduxjs/toolkit'
//Create a slice of the store
const initialState = {
    deck: [],
}

//Create a slice of the store
export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        setDeck: (state, action) => {
            state.deck = action.payload
        }
    }
})

//Export the actions
export const {setDeck} = deckSlice.actions

export default deckSlice.reducer