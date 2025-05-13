import { configureStore } from '@reduxjs/toolkit';
import habitsSlice from "./slice/habitsSlice.ts";

export const store = configureStore({
    reducer: {
        habits: habitsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;