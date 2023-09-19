import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/redux/features/authSlice'
import navReducer from '@/redux/features/navExpandSlice'

export const store = configureStore({
    reducer: {
        authReducer,
        navReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;