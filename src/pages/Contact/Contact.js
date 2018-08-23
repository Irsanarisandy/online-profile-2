import React from 'react';
import {
    CVIcon,
    EmailIcon,
    GitHubLogo,
    LinkedInLogo
} from '../../components/logos-and-icons';
import styles from './styles';
import './styles.css';

const Contact = () => (
    <div id="contactContainer" style={styles.container}>
        <h1 style={styles.text1}>CONTACT ME!</h1>
        <div style={styles.linkContainer}>
            <a
                className="links"
                style={styles.links}
                href="mailto:irsanarisandy@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <EmailIcon />
            </a>
            <a
                className="links"
                style={styles.links}
                href="https://github.com/irsanarisandy"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubLogo />
            </a>
            <a
                className="links"
                style={styles.links}
                href="https://www.linkedin.com/in/irsan-arisandy"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedInLogo />
            </a>
            <a
                className="links"
                style={styles.links}
                href="https://www.dropbox.com/s/npvzonzakkjqsbc/CV.pdf?dl=0"
                target="_blank"
                rel="noopener noreferrer"
            >
                <CVIcon />
            </a>
        </div>
    </div>
);

export default Contact;
