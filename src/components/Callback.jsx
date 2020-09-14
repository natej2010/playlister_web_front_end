import axios from 'axios'
import React from 'react';
import qs from 'qs'
import { Redirect, useLocation } from 'react-router-dom';

const Callback = () => {

    const location = useLocation();
    const code = qs.parse(location.search, { ignoreQueryPrefix: true }).code

    //Get Authentication Header from Spotify API
    axios.post('http://localhost:5000/api/spotify/get_auth_header', 
                {code: code, callback: window.location.href.split('?')[0]})
            .then(response => {
                localStorage.setItem('spotify_header', JSON.stringify(response.data))
            })

    return (
        
        <div >
            <Redirect to="/" />
        </div>
    )
};
export default Callback;
