import React from 'react';

import { Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/blog" component={Blog} />
        </Switch>
    )
} 

export default Routes;