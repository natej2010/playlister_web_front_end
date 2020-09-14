import React, { useState } from 'react';
import {Button, Typography, withStyles} from "@material-ui/core";
import AppBar from './AppBar'
import axios from 'axios' 

const styles = theme => ({
    button: {
        margin: 10,
    },
    input: {
        display: 'none',
    },
    root: {
        marginTop: 100,
    },
    image: {
        marginRight: 20,
        marginTop: 100
    },
    paragraph: {
        font: 'Cooper Black'
    }
});


const Home = ({ classes }) => {
    const [viewUser, setViewUser] = useState("");

    
    const header = localStorage.getItem('spotify_header')
    if (header) {
    axios.post('http://localhost:5000/api/spotify/user_profile', 
    {headers: header})
        .then(response => {
            setViewUser(response.data.display_name)
        })
    }
    

    const loginClick = () => {
        axios.get(`http://localhost:5000/api/spotify/authenticate?callback=${window.location.href}callback`)
             .then(response => {
                axios.get(response.data)
                    .then(response => {
                        window.location.href = response.request.responseURL
            })
        })
    };

    return (
        <div className={classes.root}>
            <AppBar />
            <Typography component="h2" variant="h1" gutterBottom>
                {`Welcome To Playlister`}
            </Typography>
            <Button onClick={loginClick} className={classes.menuButton} variant="contained" color="default">Log Into Spotify</Button>
            <br/>
            {<Typography component="h2" variant="h1" gutterBottom>
                {`Logged in as ${ viewUser }`}
            </Typography> && viewUser }
        </div>
    )
};
export default withStyles(styles)(Home);
