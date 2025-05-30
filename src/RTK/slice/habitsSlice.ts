import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DONE, NONE, NOT_DONE} from "../constants/habitStatus.tsx";
import {initialState, HabitsStateInit} from '../types/types.ts';
import {HabitDayType} from "../../components/HabitDay/HabitDay.tsx";

const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        updateHabitStatus: (state: HabitsStateInit, action: PayloadAction<HabitDayType>) => {
            const {title, id, status} = action.payload;
            const habitIndex = state.habits.findIndex((habit) => habit.title === title);

            //the habit has been found by title
            if (habitIndex !== -1) {
                const updatedDayStore = state.habits[habitIndex].week[id - 1];

                updatedDayStore.status = status === DONE ? DONE : status === NOT_DONE ? NOT_DONE : NONE;
            }
        },
        addHabits:(state:HabitsStateInit, action: PayloadAction<{title: string; description: string}>) => {
            const {title, description} = action.payload;

            state.habits.push({title, description, week: [
                    {
                        id: 1,
                        day: 'Mon',
                        status:  NOT_DONE
                    },
                    {
                        id: 2,
                        day: 'Tue',
                        status: NOT_DONE,
                    },
                    {
                        id: 3,
                        day: 'Wed',
                        status: NOT_DONE,
                    },
                    {
                        id: 4,
                        day: 'Thu',
                        status: NOT_DONE,
                    },
                    {
                        id: 5,
                        day: 'Fri',
                        status: NOT_DONE,
                    },
                    {
                        id: 6,
                        day: 'Sat',
                        status: NOT_DONE,
                    },
                    {
                        id: 7,
                        day: 'Sun',
                        status: NOT_DONE,
                    },
                ],
            })
        }
    },
});

export const {updateHabitStatus, addHabits} = habitsSlice.actions;
export default habitsSlice.reducer;
