import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NoMatch from './NoMatch'
import Home from "./Home"


export default function Routes(){
	return (
		<Switch>
            <Route exact path='/' component={Home}/>
            <Route component={NoMatch} />
        </Switch>
	)
}