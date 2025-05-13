import React from 'react';
import {Container, Divider, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import HabitWeek from "../HabitWeek/HabitWeek.tsx";
import {Habit} from "../../RTK/slice/habitsSlice.ts";
import AndroidIcon from '@mui/icons-material/Android';
import {useSelector} from "react-redux";
import {RootState} from "../../RTK/store.tsx";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        padding: '10px',
    }
});

const HabitList = () => {
    const classes = useStyles();
    const customFont = "'Rubik Doodle Shadow', sans-serif";

    const habitsList = useSelector((state: RootState) => state.habits.habits);

    return (
        <>
            {habitsList.map((habit: Habit) => (
                <div key={habit.title}>
                    <Typography
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
                        border: '1px solid #f4f6e3;',
                        borderRadius: '7px',
                        width: '40%',
                        padding: '5px'
                    }}>{habit.description}</Typography>

                    <Container className={classes.container}>
                        {habit.week.map((weekDay) => (
                            <HabitWeek
                                key={`${habit.title}-${weekDay.day}`}
                                status={weekDay.status}
                                day={weekDay.day}
                                title={habit.title}
                                id={weekDay.id}
                            />
                        ))}
                    </Container>

                    <Divider sx={{my: 2}} />
                </div>
            ))}
        </>
    );
};

export default HabitList;
