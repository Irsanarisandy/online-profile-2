import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CustomNav } from './components/CustomNav';
import { Landing } from './pages/Landing';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <CustomNav />
            <Switch>
                <Route exact={true} path="/" component={Landing} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
