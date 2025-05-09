import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Typography} from '@mui/material';
import {Done, Cancel, HourglassEmptyOutlined} from '@mui/icons-material';
import {DONE, NONE, NOT_DONE} from "../../redux/constants/habitStatus.tsx";
import {makeStyles} from '@mui/styles';
import {updateHabitStatus} from "../../redux/slice/habitsSlice.ts";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px',
    },
    statusBox: {
        height: '20px',
        width: '20px',
        margin: '20px',
        marginLeft: '10px',
        cursor: 'pointer',
    },
});

const HabitWeek = (props: { status: 'DONE' | 'NOT_DONE' | 'NONE', day: string, title: string, id:number }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {title, day, status, id} = props;
    const [currentStatus, setCurrentStatus] = useState(status);

    const onClickStatusChange = () => {
        if (status === DONE) {
            setCurrentStatus(NOT_DONE);
        } else if (status === NOT_DONE) {
            setCurrentStatus(NONE);
        } else {
            setCurrentStatus(DONE);
        }
    };

    useEffect(() => {
        dispatch(updateHabitStatus({title, day, id, currentStatus: currentStatus}));
    },[currentStatus])

    return (
        <div>
            <Typography>{day}</Typography>

            <div className={classes.statusBox} onClick={() => onClickStatusChange()}>
                {currentStatus === DONE ? <Done/> : null}
                {currentStatus === NOT_DONE ? <Cancel/> : null}
                {currentStatus === NONE ? <HourglassEmptyOutlined/> : null}
            </div>
        </div>
    );
};

export default HabitWeek;
