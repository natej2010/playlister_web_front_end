import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, Redirect} from 'react-router-dom'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        background: 'red',
        color: 'white'
    },
    textField: {
        marginLeft: -12,
        marginRight: 20,
        marginTop: 10
      },
      
      multilineColor: {
        background: 'white',
        color: 'black'
      }
});

const ButtonAppBar = ({ classes }) => {
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton onClick={console.log('GO HOME')}
                                className={classes.menuButton} aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Game Night Wizard
                    </Typography>
                    <Button onClick={console.log('GO CREATE A GAME NIGHT')}
                            className={classes.menuButton} variant="contained" >Create Game Night</Button>
                    <Button onClick={console.log('GO JOIN A GAME NIGHT')}
                            className={classes.menuButton} variant="contained" >Join Game Night</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(ButtonAppBar);