import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Types
import { Currencies } from "../bitcoinTypes";

type AppState = {
    currency: Currencies;
}


//redux initialState
const initialState: AppState = {
    currency: Currencies.USD

}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        changingCurrency: (state, action: PayloadAction<Currencies>) => {

            state.currency = action.payload

        }
    }

})
export const {changingCurrency}=appSlice.actions;
export default appSlice.reducer