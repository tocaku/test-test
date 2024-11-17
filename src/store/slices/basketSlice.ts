import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const basketlSlice = createSlice({
    name: "basketlSlice",
    initialState,
    reducers: {
        addItemToBasket: () => {
            
        },
        
    }
})

export const {
    addItemToBasket
} = basketlSlice.actions

export default basketlSlice.reducer