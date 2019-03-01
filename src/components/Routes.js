import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NoMatch from './NoMatch'
import Subscription from "./Subscription";


export default function Routes(){
	return (
		<Switch>
            <Route exact path='/' component={Subscription}/>
            <Route component={NoMatch} />
        </Switch>
	)
}