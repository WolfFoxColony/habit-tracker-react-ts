import React from 'react';
import {useSelector} from "react-redux";
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HabitDay from "../HabitDay/HabitDay.tsx";
import AndroidIcon from '@mui/icons-material/Android';
import {selectHabits} from "../../RTK/ selectors/selectors.ts";
import {Habit} from "../../RTK/types/types.ts";

const HabitList = () => {
    const customFont = "'Rubik Doodle Shadow', sans-serif";
    const habitsList = useSelector(selectHabits);

    return (
        <>
            {habitsList.map((habit: Habit, id:number) => (
                <div key={`${habit.title}-${id}`}>
                    <Typography className={'word-space-normal'}
                                variant="h6"
                                sx={{
                                    fontFamily: customFont,
                                    padding: '5px',
                                    margin: '10px 0',
                                    backgroundColor: '#fffbe1',
                                    border: '1px solid #e9e90c',
                                    display: 'flex',
                                    borderRadius: '6px',
                                    alignItems: 'center'
                                }}
                    >
                        <AndroidIcon sx={{mx: '15px'}}/> {habit.title}
                    </Typography>

                    <Typography sx={{
                        mb: '15px',
                        borderBottom: '1px solid #eeee1f;',
                        borderRadius: '7px',
                        width: '50%',
                        padding: '5px'
                    }}>
                        {habit.description}
                    </Typography>

                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'baseline',
                        padding: '10px',
                    }}>
                        {habit.week.map((weekDay) => (
                            <HabitDay
                                key={`${habit.title}-${weekDay.day}`}
                                status={weekDay.status}
                                day={weekDay.day}
                                title={habit.title}
                                id={weekDay.id}
                            />
                        ))}
                    </Container>

                    <Divider sx={{my: 2, mb: '40px'}}/>
                </div>
            ))}
        </>
    );
};

export default HabitList;
