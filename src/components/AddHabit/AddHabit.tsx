import {KeyboardArrowRight} from '@mui/icons-material';
import {Button, TextField, Typography} from '@mui/material';
import React, {FormEvent, useState} from 'react';
import AndroidIcon from "@mui/icons-material/Android";
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {addHabits} from "../../RTK/slice/habitsSlice.ts";

const AddHabit = () => {
    const dispatch = useDispatch();
    const customFont = "'Rubik Doodle Shadow', sans-serif";
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        if (name === 'title') {
            setTitle(value);
        } else if (name === 'description') {
            setDescription(value);
        }
    };

    const formSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addHabits({title, description}));
    }

    return (
        <Box sx={{width: '100%', display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography
                className={'word-space-normal'}
                variant="h6"
                sx={{
                    fontFamily: customFont,
                    padding: '5px 15px 5px 5px',
                    margin: '10px 0',
                    backgroundColor: '#fffbe1',
                    border: '1px solid #e9e90c',
                    display: 'flex',
                    borderRadius: '6px',
                    alignItems: 'center'
                }}
            >
                <AndroidIcon sx={{mx: '15px'}}/> Create a new Habit
            </Typography>

            <form onSubmit={(e) => formSubmit(e)} autoComplete="off" noValidate>
                <TextField
                    name="title"
                    sx={{mb: '20px'}}
                    variant="standard"
                    label="Habit Title"
                    color="success"
                    required
                    onChange={(e) => handleChange(e)}
                    value={title}
                />
                <TextField
                    value={description}
                    name="description"
                    sx={{mb: '30px'}}
                    variant="standard"
                    label="Habit Description"
                    color="success"
                    fullWidth
                    rows={3}
                    required
                    onChange={(e) => handleChange(e)}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    endIcon={<KeyboardArrowRight/>}
                    size={'small'}
                    sx={{color: 'black', backgroundColor: '#e5f3e0', border: '1px solid #88b488'}}>
                    Add habit
                </Button>
            </form>
        </Box>
    );
};

export default AddHabit;
