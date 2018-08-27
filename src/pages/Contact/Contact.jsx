import React from 'react';
import { CustomLinkContainer } from '../../components/CustomLinkContainer';
import styles from './styles';
import './styles.css';

const Contact = () => (
    <div id="contact-container" style={styles.container}>
        <h1 style={styles.text1}>CONTACT ME!</h1>
        <div id="contact-link-container" style={styles.linkContainer}>
            <CustomLinkContainer />
        </div>
    </div>
);

export default Contact;
