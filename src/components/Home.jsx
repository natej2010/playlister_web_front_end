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

    let current_user = 'PLACE HOLDER';

    const handleClick = () => {
    };

    const handleChange = name => event => {
        console.log(event.target.value);
        setViewUser(event.target.value);
    };

    return (
        <div className={classes.root}>
            <AppBar />
            <img className={classes.image} src={'./home_image.jpg'}
                 alt="Welcome to Game Night Wizard!"/>
            <Typography component="h2" variant="h1" gutterBottom>
                {`Welcome to Board Game Wizards ${current_user}`}
            </Typography>
            <Button onClick={console.log('View My Collection')} className={classes.menuButton} variant="contained" color="default">View My Collection</Button>
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
