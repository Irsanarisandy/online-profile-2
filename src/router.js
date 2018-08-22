import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CustomNav } from './components/CustomNav';
import { Contact } from './pages/Contact';
import { Landing } from './pages/Landing';
import './styles/main.css';

const AppRouter = () => (
    <BrowserRouter>
        <div id="mainContainer">
            <CustomNav />
            <div id="pageContent">
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/contact" component={Contact} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default AppRouter;
