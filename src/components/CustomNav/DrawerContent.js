import { Divider, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { CustomLogo } from '../CustomLogo';
import { EmailIcon, GitHubLogo, LinkedInLogo } from '../logos-and-icons';
import styles from './styles';

const DrawerContent = ({ classes, toggleDrawer }) => (
    <div style={styles.drawerContainer}>
        <Link
            style={styles.logo}
            to="/"
            onClick={toggleDrawer ? toggleDrawer(false) : null}
        >
            <CustomLogo />
        </Link>
        <div style={styles.customTextContainer}>
            <p style={styles.custom1}>const&nbsp;</p>
            <p style={styles.custom2}>softwareDev</p>
        </div>
        <div style={styles.customTextContainer}>
            <p style={styles.custom3}>=&nbsp;</p>
            <p style={styles.custom4}>Irsan-Arisandy()</p>
            <p style={styles.custom3}>;</p>
        </div>
        <Divider classes={{ root: classes.divider }} />
        <Link to="/" onClick={toggleDrawer ? toggleDrawer(false) : null}>
            <h3 style={styles.links}>ABOUT</h3>
        </Link>
        <Link to="/" onClick={toggleDrawer ? toggleDrawer(false) : null}>
            <h3 style={styles.links}>PROJECTS</h3>
        </Link>
        <Link to="/contact" onClick={toggleDrawer ? toggleDrawer(false) : null}>
            <h3 style={styles.links}>CONTACT</h3>
        </Link>
        <div style={styles.iconContainer}>
            <IconButton
                style={styles.links}
                href="mailto:irsanarisandy@hotmail.com"
                target="_blank"
            >
                <EmailIcon />
            </IconButton>
            <IconButton
                style={styles.links}
                href="https://github.com/irsanarisandy"
                target="_blank"
            >
                <GitHubLogo />
            </IconButton>
            <IconButton
                style={styles.links}
                href="https://www.linkedin.com/in/irsan-arisandy"
                target="_blank"
            >
                <LinkedInLogo />
            </IconButton>
        </div>
    </div>
);

DrawerContent.defaultProps = {
    classes: null,
    toggleDrawer: null
};

DrawerContent.propTypes = {
    classes: PropTypes.shape({
        divider: PropTypes.object
    }),
    toggleDrawer: PropTypes.func
};

export default withStyles(styles)(DrawerContent);
