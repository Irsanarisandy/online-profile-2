import React from 'react';
import {
    CVIcon,
    EmailIcon,
    GitHubLogo,
    LinkedInLogo
} from '../logos-and-icons';
import styles from './styles';

const CustomLinkContainer = () => (
    <div>
        <a
            style={styles.links}
            href="mailto:irsanarisandy@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <EmailIcon />
        </a>
        <a
            style={styles.links}
            href="https://github.com/irsanarisandy"
            target="_blank"
            rel="noopener noreferrer"
        >
            <GitHubLogo />
        </a>
        <a
            style={styles.links}
            href="https://www.linkedin.com/in/irsan-arisandy"
            target="_blank"
            rel="noopener noreferrer"
        >
            <LinkedInLogo />
        </a>
        <a
            style={styles.links}
            href="https://www.dropbox.com/s/npvzonzakkjqsbc/CV.pdf?dl=0"
            target="_blank"
            rel="noopener noreferrer"
        >
            <CVIcon />
        </a>
    </div>
);

export default CustomLinkContainer;
