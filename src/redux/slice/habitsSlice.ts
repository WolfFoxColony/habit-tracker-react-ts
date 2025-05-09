import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DONE, NONE, NOT_DONE} from "../constants/habitStatus.tsx";

export interface Habit {
    title: string,
    description: string,
    week: {
        day: string;
        status: 'DONE' | 'NOT_DONE' | 'NONE';
        id: number;
    }[],
}

interface HabitsStateInit {
    habits: Habit[]
}

const initialState: HabitsStateInit = {
    habits: [
        {
            title: 'POOL',
            description: 'Swim for 40 minutes in the pool',
            week: [
                {
                    id: 1,
                    day: 'Monday',
                    status:  DONE
                },
                {
                    id: 2,
                    day: 'Tuesday',
                    status: NOT_DONE,
                },
                {
                    id: 3,
                    day: 'Wednesday',
                    status: NONE,
                },
                {
                    id: 4,
                    day: 'Thursday',
                    status: DONE,
                },
                {
                    id: 5,
                    day: 'Friday',
                    status: NONE,
                },
                {
                    id: 6,
                    day: 'Saturday',
                    status: NOT_DONE,
                },
                {
                    id: 7,
                    day: 'Sunday',
                    status: NOT_DONE,
                },
            ],
        },
        {
            title: 'GYM',
            description: '1.5 hours of strength training',
            week: [
                {
                    id: 1,
                    day: 'Monday',
                    status:  NOT_DONE
                },
                {
                    id: 2,
                    day: 'Tuesday',
                    status: NOT_DONE,
                },
                {
                    id: 3,
                    day: 'Wednesday',
                    status: NONE,
                },
                {
                    id: 4,
                    day: 'Thursday',
                    status: NOT_DONE,
                },
                {
                    id: 5,
                    day: 'Friday',
                    status: NONE,
                },
                {
                    id: 6,
                    day: 'Saturday',
                    status: NOT_DONE,
                },
                {
                    id: 7,
                    day: 'Sunday',
                    status: NOT_DONE,
                },
            ],
        }
    ],
};

const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        updateHabitStatus: (state: HabitsStateInit, action: PayloadAction<{ title: string; day: string; currentStatus: 'DONE' | 'NOT_DONE' | 'NONE'; id: number; }>) => {
            const {title, id, currentStatus} = action.payload;
            const habitIndex = state.habits.findIndex((habit) => habit.title === title);

            //the habit has been found by title
            if (habitIndex !== -1) {
                const updatedDayStore = state.habits[habitIndex].week[id - 1];

                updatedDayStore.status = currentStatus === DONE ? DONE : currentStatus === NOT_DONE ? NOT_DONE : NONE;
            }
        },
    },
});

export const {updateHabitStatus} = habitsSlice.actions;
export default habitsSlice.reducer;
