import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from './router';
import theme from './styles/theme';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
