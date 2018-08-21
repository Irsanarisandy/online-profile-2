import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            light: '#1DB4F1',
            main: '#003E6D'
        },
        secondary: {
            main: '#FFEA55'
        }
    },
    typography: {
        fontFamily: ['Oswald', 'Arvo', 'sans-serif'].join(',')
    }
});
