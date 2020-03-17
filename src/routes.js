import React from 'react';
import {BrowserRouter, Route, hashHistory} from 'react-router-dom';
import Collection from './components/Collection';
import Home from './components/Home';
import LogIn from './components/LogIn';

// import more components
export default (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={() => <Home />}/>
            <Route path='/login' component={LogIn}/>
            {/*<Route path='/join_game_night' component={() => <Home {...(content.dataset)} />}/>*/}
            {/*<Route path='/my_collection' component={() => <Collection {...(content.dataset)} />}/>*/}
        </div>
    </BrowserRouter>
);