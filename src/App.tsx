import React from 'react';
import './assets/styles/main.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddHabit from "./components/AddHabit/AddHabit.tsx";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu.tsx";
import HabitList from "./components/HabitList/HabitList.tsx";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";

function App() {
    const customFont = "'Rubik Doodle Shadow', sans-serif";

    return (
        <Box sx={{flexGrow: 1, margin: '15px'}}>

            <Router>
                <AppBar sx={{backgroundColor: '#698B69', borderRadius: '6px', mb: '30px'}} position="static">
                    <Toolbar>
                        <DrawerMenu/>

                        <Typography variant="h6" component="h1" className={'word-space-normal'} sx={{fontFamily: customFont, mr: 1}}>Habit Tracker</Typography><AdbIcon/>
                    </Toolbar>
                </AppBar>

                <Routes>
                    <Route path="/" element={<HabitList/>}/>
                    <Route path="/addHabits" element={<AddHabit/>}/>
                </Routes>
            </Router>

        </Box>
    );
}

export default App;
