import React from 'react';
import Typing from 'react-typing-animation';
import styles from './styles';
import './styles.css';

const Landing = () => (
    <div id="text-editor">
        <Typing className="typing-landing">
            <span className="typing-landing-content">
                <p style={styles.custom1}>
                    &#47;&#47; Need an awesome software or web
                </p>
            </span>
            <span className="typing-landing-content">
                <p style={styles.custom1}>&#47;&#47; developer?</p>
            </span>
            <span className="typing-landing-content">&nbsp;</span>
            <Typing.Delay ms={2000} />
            <span className="typing-landing-content">
                <p style={styles.custom2}>const&nbsp;</p>
                <p style={styles.custom3}>ITDeveloper&nbsp;</p>
                <p>=&nbsp;</p>
                <p style={styles.custom4}>Irsan-Arisandy()</p>
                <p>;</p>
            </span>
            <span className="typing-landing-content">&nbsp;</span>
            <Typing.Delay ms={1000} />
            <span className="typing-landing-content">
                <p style={styles.custom2}>let&nbsp;</p>
                <p style={styles.custom3}>coreSkills&nbsp;</p>
                <p>= [</p>
                <p style={styles.custom3}>React, React Native,</p>
            </span>
            <span className="typing-landing-content">
                <p style={styles.custom3}>
                    &emsp;&emsp;JavaScript, HTML5, CSS3, Python,
                </p>
            </span>
            <span className="typing-landing-content">
                <p style={styles.custom3}>
                    &emsp;&emsp;Java, C#, PostgreSQL, MongoDB
                </p>
                <p>];</p>
            </span>
            <span className="typing-landing-content">&nbsp;</span>
            <span className="typing-landing-content">&nbsp;</span>
            <Typing.Delay ms={2000} />
            <span className="typing-landing-content">
                <p style={styles.custom2}>class&nbsp;</p>
                <p style={styles.custom4}>HireMe()&nbsp;</p>
                <p>&#123;</p>
            </span>
            <span className="typing-landing-content">
                <p style={styles.custom1}>
                    &emsp;&emsp;&#47;&#47; Possibilities awaits
                </p>
            </span>
            <span className="typing-landing-content">
                <p>&#125;</p>
            </span>
            <span className="typing-landing-content">&nbsp;</span>
            <span className="typing-landing-content">&nbsp;</span>
        </Typing>
    </div>
);

export default Landing;
