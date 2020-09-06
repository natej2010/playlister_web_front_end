import React, {} from 'react';
import {Button, Typography, withStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import AppBar from './AppBar'

const styles = theme => ({
    button: {
        margin: 10,
    },
    input: {
        display: 'none',
    },
    root: {
        marginTop: 100
    },
    image: {
        marginRight: 20,
        marginTop: 100
    },
    paragraph: {
        font: 'Cooper Black'
    }
});

const Home = ({ classes}) => {
    const [viewUser, setViewUser] = React.useState('');

    let current_user = '';

    const handleClick = () => {
    };

    const loginClick = () => {
        fetch('http://localhost:3000/api/spotify/authenticate')
        .then(res => res.json())
        .then(
            (result) => {
                setViewUser(result)
            })
    };

    const handleChange = name => event => {
        console.log(event.target.value);
        setViewUser(event.target.value);
    };

    return (
        <div className={classes.root}>
            <AppBar />
            <Typography component="h2" variant="h1" gutterBottom>
                {`Welcome To Playlister`}
            </Typography>
            <Button onClick={loginClick} className={classes.menuButton} variant="contained" color="default">Log Into Spotify</Button>
            <br/>
            <TextField
                id="standard-name"
                placeholder="BGG Username"
                value={viewUser}
                onChange={handleChange('username')}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }}          
            />
            <Button onClick={handleClick} className={classes.menuButton} disabled={!viewUser}
                    variant="contained" color="default">View User Collection</Button>
        </div>
    )
};
export default withStyles(styles)(Home);
