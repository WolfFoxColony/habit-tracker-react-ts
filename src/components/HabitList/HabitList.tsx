import React from 'react';
import {Container, Divider, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import HabitWeek from "../HabitWeek/HabitWeek.tsx";
import {Habit} from "../../redux/slice/habitsSlice.ts";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px',
    }
});

const HabitList = (props: { habit: Habit }) => {
    const classes = useStyles();
    const {title, description, week} = props.habit;

    return (
        <>
            <Typography sx={{padding: '10px 0'}}>{title}: {description}</Typography>
            <Container className={classes.container}>
                {week.map((weekDay: { day: string, status: 'DONE' | 'NOT_DONE' | 'NONE', id: number }) => {
                    return (
                        <HabitWeek
                            key={`${title}-${weekDay.day}`}
                            status={weekDay.status as 'DONE' | 'NOT_DONE' | 'NONE'}
                            day={weekDay.day}
                            title={title}
                            id={weekDay.id}
                        />
                    );
                })}
            </Container>
            <Divider/>
        </>
    );
};

export default HabitList;
