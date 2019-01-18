import React from 'react';
import Typing from 'react-typing-animation';
import Blurb from './Blurb';
import dp from '../../assets/dp.jpg';
// import { CustomLinkContainer } from '../../components/CustomLinkContainer';
import { Skills } from '../../components/Skills';
import styles from './styles';
import './styles.css';

const About = () => (
    <div id="about-container" style={styles.mainContainer}>
        <div style={styles.headContainer}>
            <img style={styles.image} src={dp} alt="dp" />
            <h1>IRSAN ARISANDY</h1>
            <Typing className="typing-about" loop>
                <span>Web Developer</span>
                <Typing.Backspace count={14} delay={2000} />
                <span>Software Developer</span>
                <Typing.Backspace count={18} delay={2000} />
            </Typing>
        </div>
        <Blurb />
        <h2>Skills</h2>
        <Skills />
        {/* <div style={styles.experienceContainer}>
            <div></div>
        </div> */}
    </div>
);

export default About;
