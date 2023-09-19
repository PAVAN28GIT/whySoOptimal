import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    isExpanded: Boolean;
}

const initialState = {
    isExpanded: false
} as InitialState;

export const navExpand = createSlice({
    name: 'navExpand',
    initialState,
    reducers: {
        toggleNav(state, action: PayloadAction<Boolean>) {
            state.isExpanded = action.payload;
        }
    }
});

export const { toggleNav } = navExpand.actions;

export default navExpand.reducer;