import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './About.jsx';
import Contact from './Contact.jsx';

export default function Contents () {
    return(
        <Switch>
            <Redirect exact from="/" to="/about" />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
    );
}