import classes from '*.module.css';
import { AppBar, Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import React from 'react'

interface NavBarProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            alignSelf: "flex-end",
        },
        title: {
            flexGrow: 1,
            font: "Roboto",
            fontWeight: 'bold',
        },
        appbar: {
           
        },
    }),
);

export const NavBar: React.FC<NavBarProps> = ({ }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar className={classes.appbar} color="inherit">
                    <Typography variant="h6" className={classes.title}>
                        ecomsim
                     </Typography>
                    <Button color="inherit" className={classes.menuButton}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}