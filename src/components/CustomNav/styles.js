// don't forget to set margin-left of pageContent in main.css
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
        boxShadow: '5px 0px 5px 0px #6B6B6B',
        position: 'fixed',
        textAlign: 'center',
        width: drawerWidth
    },
    drawerContainer: {
        fontFamily: ['Oswald', 'sans-serif'].join(',')
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
        padding: '20px 0 0'
    },
    iconContainer: {
        bottom: 20,
        position: 'absolute',
        width: '100%'
    }
};
