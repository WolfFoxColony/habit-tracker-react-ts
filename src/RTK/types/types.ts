import {DONE, NONE, NOT_DONE} from "../constants/habitStatus.tsx";

export interface Habit {
    title: string,
    description: string,
    week: HabitWeekI[],
}

export interface HabitWeekI {
    day: string;
    status: 'DONE' | 'NOT_DONE' | 'NONE';
    id: number;
}

export interface HabitsStateInit {
    habits: Habit[]
}

export const initialState: HabitsStateInit = {
    habits: [
        {
            title: 'POOL',
            description: 'Swim for 40 minutes in the pool',
            week: [
                {
                    id: 1,
                    day: 'Mon',
                    status:  DONE
                },
                {
                    id: 2,
                    day: 'Tue',
                    status: NOT_DONE,
                },
                {
                    id: 3,
                    day: 'Wed',
                    status: NONE,
                },
                {
                    id: 4,
                    day: 'Thu',
                    status: DONE,
                },
                {
                    id: 5,
                    day: 'Fri',
                    status: NONE,
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
        },
        {
            title: 'GYM',
            description: '1.5 hours of strength training',
            week: [
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
                    status: NONE,
                },
                {
                    id: 4,
                    day: 'Thu',
                    status: NOT_DONE,
                },
                {
                    id: 5,
                    day: 'Fri',
                    status: NONE,
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
                }
            ]
        }
    ]
};


