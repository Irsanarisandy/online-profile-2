import { Divider, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { CustomLogo } from '../CustomLogo';
import { EmailIcon, GitHubLogo, LinkedInLogo } from '../logos-and-icons';
import styles from './styles';
import './styles.css';

const DrawerContent = ({ classes, toggleDrawer }) => (
    <div>
        <NavLink
            style={styles.logo}
            to="/"
            onClick={toggleDrawer ? toggleDrawer(false) : null}
        >
            <CustomLogo />
        </NavLink>
        <div style={styles.customTextContainer}>
            <p style={styles.custom1}>const&nbsp;</p>
            <p style={styles.custom2}>ITDeveloper</p>
        </div>
        <div style={styles.customTextContainer}>
            <p style={styles.custom3}>=&nbsp;</p>
            <p style={styles.custom4}>Irsan-Arisandy()</p>
            <p style={styles.custom3}>;</p>
        </div>
        <Divider classes={{ root: classes.divider }} />
        <NavLink
            to="/about"
            activeStyle={styles.linksActive}
            className="page-links"
            style={styles.links}
            onClick={toggleDrawer ? toggleDrawer(false) : null}
        >
            ABOUT
        </NavLink>
        <NavLink
            to="/projects"
            activeStyle={styles.linksActive}
            className="page-links"
            style={styles.links}
            onClick={toggleDrawer ? toggleDrawer(false) : null}
        >
            PROJECTS
        </NavLink>
        <MediaQuery minWidth={830} minHeight={618}>
            <NavLink
                to="/games"
                activeStyle={styles.linksActive}
                className="page-links"
                style={styles.links}
                onClick={toggleDrawer ? toggleDrawer(false) : null}
            >
                GAMES
            </NavLink>
        </MediaQuery>
        <NavLink
            to="/contact"
            activeStyle={styles.linksActive}
            className="page-links"
            style={styles.links}
            onClick={toggleDrawer ? toggleDrawer(false) : null}
        >
            CONTACT
        </NavLink>
        <MediaQuery minHeight={450}>
            <div style={styles.iconContainer}>
                <IconButton
                    style={styles.iconLinks}
                    href="mailto:irsanarisandy@hotmail.com"
                    target="_blank"
                >
                    <EmailIcon />
                </IconButton>
                <IconButton
                    style={styles.iconLinks}
                    href="https://github.com/irsanarisandy"
                    target="_blank"
                >
                    <GitHubLogo />
                </IconButton>
                <IconButton
                    style={styles.iconLinks}
                    href="https://www.linkedin.com/in/irsan-arisandy"
                    target="_blank"
                >
                    <LinkedInLogo />
                </IconButton>
            </div>
        </MediaQuery>
    </div>
);

DrawerContent.defaultProps = {
    classes: null,
    toggleDrawer: null
};

DrawerContent.propTypes = {
    classes: PropTypes.shape(),
    toggleDrawer: PropTypes.func
};

export default withStyles(styles)(DrawerContent);
