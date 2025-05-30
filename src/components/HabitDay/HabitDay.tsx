import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Typography from '@mui/material/Typography';
import HourglassEmptyOutlined from '@mui/icons-material/HourglassEmptyOutlined';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import {DONE, NONE, NOT_DONE} from "../../RTK/constants/habitStatus.tsx";
import {makeStyles} from '@mui/styles';
import {updateHabitStatus} from "../../RTK/slice/habitsSlice.ts";
import ClearIcon from '@mui/icons-material/Clear';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 10px',
    },
    statusBox: {
        height: '20px',
        width: '20px',
        margin: '10px',
        marginLeft: '10px',
        cursor: 'pointer',
        display: 'flex',
        borderRadius: "30%",
        border: "1px solid #88b488",
        padding: "15px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#e5f3e0'
    },
});

export type HabitDayType = {
    status: 'DONE' | 'NOT_DONE' | 'NONE',
    day: string,
    title: string,
    id: number
}

const HabitDay = React.memo((props: HabitDayType) => {
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
        if (status !== currentStatus) {
            dispatch(updateHabitStatus({title, day, id, status: currentStatus}));
        }
    }, [currentStatus])

    const statusIcons = {
        [DONE]: <DoneOutlineIcon/>,
        [NOT_DONE]: <ClearIcon/>,
        [NONE]: <HourglassEmptyOutlined/>,
    };

    return (
        <div className={classes.container}>
            <Typography>{day}</Typography>

            <div className={classes.statusBox} onClick={() => onClickStatusChange()}>
                {statusIcons[currentStatus]}
            </div>
        </div>
    );
});

export default HabitDay;
