import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";

type menuItemsType = {
    title: string,
    icon: React.ReactNode,
    path: string
}

const DrawerMenu = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const openMenu = (toggle: boolean) => () => {
        setOpen(toggle);
    };

    const menuItems: menuItemsType[] = [
        {
            title: 'My Habits',
            icon: <AdbIcon sx={{color: '#698B69'}}/>,
            path: '/',
        },
        {
            title: 'Add Habit',
            icon: <AddCircleOutlined sx={{color: '#698B69'}}/>,
            path: '/addHabits',
        },
    ];

    return (
        <>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 3}}>
                <MenuIcon onClick={openMenu(true)}/>
            </IconButton>

            <Drawer open={open} onClose={openMenu(false)}>
                <List sx={{width: '12rem'}} onClick={openMenu(false)}>
                    {menuItems.map((item: menuItemsType, id:number) => (
                        <>
                            <ListItem key={`${item.title}-${id}`} onClick={() => navigate(item.path)} sx={{cursor: 'pointer', mb: '5px'}}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title}/>
                            </ListItem>
                            <Divider/>
                        </>
                    ))}
                </List>
            </Drawer>
        </>
    )
}
export default DrawerMenu;