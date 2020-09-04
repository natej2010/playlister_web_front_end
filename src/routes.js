import React from 'react';
import {BrowserRouter, Route, hashHistory} from 'react-router-dom';
import Home from './components/Home';

// import more components
export default (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={() => <Home />}/>
        </div>
    </BrowserRouter>
);