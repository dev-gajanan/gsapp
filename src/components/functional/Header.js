import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
        background: '#ffffff',
        color: '#000000',
        boxShadow: 'none',
        borderBottom: '1px solid #cccccc'
    },
      
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    }
  }));

function Header () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar>
                    <Typography varient="h6" className={classes.title}>
                        Its My App
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Avatar className={classes.purple}>GS</Avatar>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
