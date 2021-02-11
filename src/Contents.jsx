import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Project from './Projects.jsx';

export default function Contents () {
    return(
        <div>
            <Switch>
                <Redirect exact path="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Project} />
            </Switch>
        </div>
    );
}