import {
    AppBar,
    Drawer,
    IconButton,
    SwipeableDrawer,
    Toolbar
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { CustomLogo } from '../CustomLogo';
import DrawerContent from './DrawerContent';
import styles from './styles';

class CustomNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false
        };
    }

    toggleDrawer = shouldOpen => event => {
        this.setState({
            openDrawer: shouldOpen
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <MediaQuery maxWidth={750}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                aria-label="Menu"
                                color="inherit"
                                onClick={this.toggleDrawer(true)}
                            >
                                <MenuIcon aria-haspopup="true" />
                            </IconButton>
                            <Link style={styles.logo} to="/">
                                <CustomLogo />
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <SwipeableDrawer
                        open={this.state.openDrawer}
                        onClose={this.toggleDrawer(false)}
                        onOpen={this.toggleDrawer(true)}
                        classes={{ paper: classes.swipeableDrawer }}
                    >
                        <DrawerContent toggleDrawer={this.toggleDrawer} />
                    </SwipeableDrawer>
                </MediaQuery>
                {/* don't forget to set min-width of pageContent in main.css and of Contact in styles.css */}
                <MediaQuery minWidth={750}>
                    <Drawer
                        variant="permanent"
                        anchor="left"
                        classes={{ paper: classes.normalDrawer }}
                    >
                        <DrawerContent />
                    </Drawer>
                </MediaQuery>
            </div>
        );
    }
}

CustomNav.defaultProps = {
    classes: null
};

CustomNav.propTypes = {
    classes: PropTypes.shape()
};

export default withStyles(styles)(CustomNav);
