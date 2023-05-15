import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button, Menu, MenuItem} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";

const style = {
    box: {
        backgroundColor: "grey",
    },
    menu: {
        color: "inherit",
        border: 1
    }
};
export default function ButtonAppBar() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedOption, setSelectedOption] = useState("");

    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };


    return (
        <AppBar sx={style.box} position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Movies
                </Typography>
                <Button
                    sx={style.menu}
                    onClick={handleClick}
                >
                    {selectedOption || "My Account"}
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                        <MenuItem component={Link} to={"/"} onClick={() => setSelectedOption("My account")}>My account</MenuItem>
                        <MenuItem component={Link} to={'/favorit'} onClick={() => setSelectedOption("Favorite")}>Favorite</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}