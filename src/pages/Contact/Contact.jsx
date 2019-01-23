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
    <div id="contact-container" style={styles.container}>
        <div id="contact-subcontainer">
            <h1 style={styles.text1}>CONTACT ME!</h1>
            <div id="contact-link-container" style={styles.linkContainer}>
                <a
                    aria-label="Email"
                    style={styles.links}
                    href="mailto:irsanarisandy@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <EmailIcon />
                </a>
                <a
                    aria-label="GitHub"
                    style={styles.links}
                    href="https://github.com/irsanarisandy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubLogo />
                </a>
                <a
                    aria-label="LinkedIn"
                    style={styles.links}
                    href="https://www.linkedin.com/in/irsan-arisandy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInLogo />
                </a>
                <a
                    aria-label="Dropbox"
                    style={styles.links}
                    href="https://www.dropbox.com/s/npvzonzakkjqsbc/CV.pdf?dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CVIcon />
                </a>
            </div>
        </div>
    </div>
);

export default Contact;
