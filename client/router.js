import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Test from './pages/testingField';
import NotFound from './pages/404';

export default class Router extends PureComponent {
    render() {
        return (
            <Switch>
                <Route exact path="/test">
                    <Test />
                </Route>

                <Route exact path={['/', '/home']}>
                    <Home />
                </Route>

                <Route>
                    <NotFound />
                </Route>
            </Switch>
        );
    }
}
