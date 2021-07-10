import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from './router';
import theme from './styles/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router />
    </ThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
