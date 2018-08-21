import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CustomNav } from './components/CustomNav';
import { Landing } from './pages/Landing';
import './styles/main.css';

const AppRouter = () => (
    <BrowserRouter>
        <div id="mainContainer">
            <CustomNav />
            <div id="pageContent">
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default AppRouter;
