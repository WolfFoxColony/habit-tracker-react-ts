import {RootState} from "../store.tsx";

export const selectHabits = (state: RootState) => state.habits.habits;   //to avoid creating a new object for each renderer
