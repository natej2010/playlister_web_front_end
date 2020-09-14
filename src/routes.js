import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Callback from './components/Callback'
import Home from './components/Home';


// import more components
export default (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={() => <Home />} />
            <Route path='/callback' component={() => <Callback />} />
        </div>
    </BrowserRouter>
);