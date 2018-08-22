import { Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import wellness from '../../assets/wellness-shed.png';
import aucs from '../../assets/aucs.png';
import appetite from '../../assets/app-etite.png';
import qwiky from '../../assets/qwiky.png';
import eatMyApp from '../../assets/eat-my-app.png';
import './styles.css';

const Projects = ({ classes }) => (
    <div style={styles.projectsContainer}>
        <div style={styles.projectContainer}>
            <a
                className="projectLinks"
                href="https://www.thewellnessshed.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.links}
            >
                <img
                    src={wellness}
                    alt="The Wellness Shed"
                    style={styles.images}
                />
                <div>
                    <h1>View Project</h1>
                </div>
            </a>
            <div style={styles.textArea}>
                <h1 style={styles.header}>Wellness Shed</h1>
                <p style={styles.text}>WordPress</p>
                <Divider classes={{ root: classes.divider }} />
                <p style={styles.text}>
                    Made a professional website with my teammates assigned
                    during MSA, for AUT Millennium, using WordPress. I
                    particularly worked on displaying the contents of the page
                    (i.e. wording and displaying pictures).
                </p>
            </div>
        </div>
        <div style={styles.projectContainer}>
            <div style={styles.textArea}>
                <h1 style={styles.header}>AUCS</h1>
                <p style={styles.text}>
                    Vanilla (No JavaScript Framework, just plain HTML5, CSS3
                    &amp; JavaScript)
                </p>
                <Divider classes={{ root: classes.divider }} />
                <p style={styles.text}>
                    Made a website for AUCS, a university club.
                </p>
            </div>
            <a
                className="projectLinks"
                href="http://aucs.azurewebsites.net/index.html"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.links}
            >
                <img
                    src={aucs}
                    alt="Auckland University Compsci Society"
                    style={styles.images}
                />
                <div>
                    <h1>View Project</h1>
                </div>
            </a>
        </div>
        <div style={styles.projectContainer}>
            <a
                className="projectLinks"
                href="https://ooksei.github.io/Hackfest/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.links}
            >
                <img src={appetite} alt="App-etite" style={styles.images} />
                <div>
                    <h1>View Project</h1>
                </div>
            </a>
            <div style={styles.textArea}>
                <h1 style={styles.header}>app-etite</h1>
                <p style={styles.text}>
                    Vanilla for front-end, Node.js for back-end
                </p>
                <Divider classes={{ root: classes.divider }} />
                <p style={styles.text}>
                    As a front-end developer, I worked on the layout, map, and
                    displaying data from Yelp API.
                </p>
            </div>
        </div>
        <div style={styles.projectContainer}>
            <div style={styles.textArea}>
                <h1 style={styles.header}>Qwiky</h1>
                <p style={styles.text}>
                    React for front-end, Node.js for back-end, NoSQL for
                    database
                </p>
                <Divider classes={{ root: classes.divider }} />
                <p style={styles.text}>
                    As a front-end developer, I worked on the map and getting
                    data to be transferred into the NoSQL database.
                </p>
            </div>
            <a
                className="projectLinks"
                href="https://badboiz.github.io/frontend/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.links}
            >
                <img src={qwiky} alt="Qwiky" style={styles.images} />
                <div>
                    <h1>View Project</h1>
                </div>
            </a>
        </div>
        <div style={styles.projectContainer}>
            <a
                className="projectLinks"
                href="http://eatmyapp.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.links}
            >
                <img src={eatMyApp} alt="Eat My App" style={styles.images} />
                <div>
                    <h1>View Project</h1>
                </div>
            </a>
            <div style={styles.textArea}>
                <h1 style={styles.header}>Eat My App</h1>
                <p style={styles.text}>
                    Vanilla for front-end, Node.js for back-end
                </p>
                <Divider classes={{ root: classes.divider }} />
                <p style={styles.text}>
                    I worked on the first page and cuisine page for front-end
                    and setting the route for Bing Image Search API for
                    back-end. Our team won the People’s Choice Award.
                </p>
            </div>
        </div>
    </div>
);

Projects.defaultProps = {
    classes: null
};

Projects.propTypes = {
    classes: PropTypes.shape({
        divider: PropTypes.object
    })
};

export default withStyles(styles)(Projects);
