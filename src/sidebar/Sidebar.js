import React from "react";
import {
    Drawer, IconButton, Chip, Stack, Avatar, Switch, FormControlLabel, List, ListItemButton,
    ListItemIcon, ListItemText, Box
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import LanguageIcon from '@mui/icons-material/Language';
import { styled } from '@mui/material/styles';
import "./sidebar.css"
import menu from "../assets/menus";
import { NavLink} from "react-router-dom";

const drawerWidth = 240;
const SideBar = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const menuItems = menu();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 44,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : 'rgba(53, 57, 69, 1)',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: 'rgba(55, 114, 255, 1)',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));


    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ml: 1, color: "#fff", ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                className="custom-drawer"
                sx={{
                    transition: "all 0.3s ease 0s",
                    width: (open ? drawerWidth : "20px"),
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}>
                <div className="drawer-header">
                    <Box>
                        <span className="avatar">N</span>
                        <h4 style={{display: "inline-block", marginLeft: "10px", color: "#fff"}}>Name</h4>
                    </Box>
                    <IconButton onClick={handleDrawerClose}>
                        <ArrowBackSharpIcon sx={{ color: "#fff" }} />
                    </IconButton>
                </div>
                <hr style={{ width: "100%", background: "#ccc" }} />
                <div className="drawer-content">
                    <div className="drawer-top">
                        <List component="nav" aria-label="main mailbox folders">
                            {
                                menuItems.map(items => {
                                    return (
                                        <NavLink
                                            to={items.path}
                                            key={items.id}
                                            className="link-items">
                                            <ListItemButton
                                                selected={selectedIndex === items.id}
                                                onClick={(event) => handleListItemClick(event, items.id)}
                                            >
                                                <ListItemIcon className="btn-icon">
                                                    {items.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={items.title} />
                                            </ListItemButton>
                                        </NavLink>
                                    )
                                })
                            }
                        </List>
                    </div>
                    <div className="drawer-bottom">
                        <Stack direction="row" spacing={1}>
                            <Chip
                                style={{ backgroundColor: "rgba(53, 57, 69, 1)", color: "#fff", borderRadius: "7px", height: "32px" }}
                                avatar={<Avatar sx={{bgcolor: "rgba(55, 114, 255, 1)", color: "#fff !important"}}>N</Avatar>}
                                label="$0.90"
                                variant="filled" />
                            <Chip
                                style={{ borderRadius: "7px", color:"rgba(55, 114, 255, 1)" }}
                                label="BUY $XYZ"
                                variant="filled"
                                color="secondary"
                            />
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                            <LanguageIcon sx={{color:"rgba(128, 129, 145, 1)"}}/>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                label=""
                            />
                        </Stack>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default SideBar;