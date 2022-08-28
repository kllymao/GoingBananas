import React from 'react';
import { AppBar, Toolbar, MenuItem, Typography } from '@mui/material';
import Home from "@mui/icons-material/Home";

const Icon = () => {
    return (
        <div>
            <Home />
        </div>
    )
}

const TopMenu = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Icon></Icon>
                    <MenuItem>
                        <Typography>Banacheck</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography>Banaspots Nearby</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography>About GoingBananas</Typography>
                    </MenuItem>
            </Toolbar>
        </AppBar>
    )
}

export default TopMenu;