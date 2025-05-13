import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import HabitList from "../HabitList/HabitList.tsx";
import DrawerMenu from "../DrawerMenu/DrawerMenu.tsx";

const Layout = () => {
    const customFont = "'Rubik Doodle Shadow', sans-serif";

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar sx={{backgroundColor: '#698B69', borderRadius: '6px', mb:'30px'}} position="static">
                <Toolbar>
                    <DrawerMenu/>

                    <Typography variant="h6" component="h1" sx={{fontFamily: customFont, mr: 1}}>
                        Habit Tracker
                    </Typography>
                    <AdbIcon/>
                </Toolbar>
            </AppBar>

            <HabitList/>
        </Box>
    );
};

export default Layout;
