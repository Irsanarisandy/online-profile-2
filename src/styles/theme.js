import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            light: '#0C6195',
            main: '#003E6D'
        },
        secondary: '#FFEA55'
    },
    typography: {
        fontFamily: ['Oswald', 'Arvo', 'sans-serif'].join(',')
    }
});
