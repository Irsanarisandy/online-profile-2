import React from 'react';
import Typing from 'react-typing-animation';
import styles from './styles';
import './styles.css';

const Landing = () => (
    <div id="text-editor">
        <Typing className="typing-landing">
            <p className="typing-landing-content">
                <span style={styles.custom1}>
                    {'// Need an awesome software or web'}
                </span>
            </p>
            <p className="typing-landing-content">
                <span style={styles.custom1}>{'// developer?'}</span>
            </p>
            <p className="typing-landing-content">&nbsp;</p>
            <Typing.Delay ms={2000} />
            <p className="typing-landing-content">
                <span style={styles.custom2}>const&nbsp;</span>
                <span style={styles.custom3}>ITDeveloper&nbsp;</span>
                <span>=&nbsp;</span>
                <span style={styles.custom4}>Irsan-Arisandy()</span>
                <span>;</span>
            </p>
            <p className="typing-landing-content">&nbsp;</p>
            <Typing.Delay ms={1000} />
            <p className="typing-landing-content">
                <span style={styles.custom2}>let&nbsp;</span>
                <span style={styles.custom3}>coreSkills&nbsp;</span>
                <span>= [</span>
                <span style={styles.custom3}>React, React Native,</span>
            </p>
            <p className="typing-landing-content">
                <span style={styles.custom3}>
                    &emsp;&emsp;JavaScript, HTML5, CSS3, Python,
                </span>
            </p>
            <p className="typing-landing-content">
                <span style={styles.custom3}>
                    &emsp;&emsp;Java, C#, PostgreSQL, MongoDB
                </span>
                <span>];</span>
            </p>
            <p className="typing-landing-content">&nbsp;</p>
            <p className="typing-landing-content">&nbsp;</p>
            <Typing.Delay ms={2000} />
            <p className="typing-landing-content">
                <span style={styles.custom2}>class&nbsp;</span>
                <span style={styles.custom4}>HireMe()&nbsp;</span>
                <span>&#123;</span>
            </p>
            <p className="typing-landing-content">
                <span style={styles.custom1}>
                    &emsp;&emsp;
                    {'// Possibilities awaits'}
                </span>
            </p>
            <p className="typing-landing-content">&#125;</p>
            <p className="typing-landing-content">&nbsp;</p>
            <p className="typing-landing-content">&nbsp;</p>
        </Typing>
    </div>
);

export default Landing;
