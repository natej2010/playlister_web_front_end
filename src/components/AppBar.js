import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
        background: 'black',
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
      },

    appBar: {
        background: 'green',
        color: 'black'
      }
});

const ButtonAppBar = ({ classes }) => {
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton onClick={() => console.log('GO HOME')}
                                className={classes.menuButton} aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Playlister
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(ButtonAppBar);