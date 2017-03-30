import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';

// Render the main component into the dom
ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="about" component={About}></Route>
        <Route path="help" component={Help}></Route>
    </Route>
</Router>,
document.getElementById('app'));
