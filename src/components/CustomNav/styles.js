// don't forget to set margin-left of pageContent in main.css to be +20 of drawerWidth
const drawerWidth = 190;

export default {
    divider: {
        height: 3,
        marginTop: 15
    },
    swipeableDrawer: {
        backgroundColor: '#003E6D',
        textAlign: 'center',
        width: drawerWidth
    },
    normalDrawer: {
        backgroundColor: '#003E6D',
        position: 'fixed',
        textAlign: 'center',
        width: drawerWidth
    },
    drawerContainer: {
        fontFamily: ['Oswald', 'sans-serif'].join(',')
    },
    logo: {
        textDecoration: 'none'
    },
    customTextContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    custom1: {
        color: '#1DB4F1'
    },
    custom2: {
        color: '#00FFFF'
    },
    custom3: {
        color: '#FFFFFF'
    },
    custom4: {
        color: '#FFEA55'
    },
    links: {
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    iconContainer: {
        bottom: 20,
        position: 'absolute',
        width: '100%'
    }
};
