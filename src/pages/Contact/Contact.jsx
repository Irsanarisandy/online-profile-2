import React from 'react';
import { CustomLinkContainer } from '../../components/CustomLinkContainer';
import styles from './styles';
import './styles.css';

const Contact = () => (
    <div id="contactContainer" style={styles.container}>
        <h1 style={styles.text1}>CONTACT ME!</h1>
        <div id="contactLinkContainer" style={styles.linkContainer}>
            <CustomLinkContainer />
        </div>
    </div>
);

export default Contact;
