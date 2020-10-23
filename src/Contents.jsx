import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './Home.jsx';
import Contact from './Contact.jsx';
import Project from './Projects.jsx';

export default function Contents () {
    return(
        <Switch>
            <Redirect exact path="/" to="/home" />
            <Route path="/home" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Project} />
        </Switch>
    );
}