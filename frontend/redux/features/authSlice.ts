import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: AuthState;
}

type AuthState = {
    isAuthenticated: boolean;
    // username: string;
    // password: string;
    // role: string;
}

const initialState = {
    value: {
        isAuthenticated: false,
        // username: '',
        // password: '',
        // role: ''
    } as AuthState
} as InitialState;

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        dummy(state, action: PayloadAction<AuthState>) {
            state.value = action.payload;
        }
    }
});

export const { dummy } = auth.actions;

export default auth.reducer;