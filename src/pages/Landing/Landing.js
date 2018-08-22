import React from 'react';
import styles from './styles';
import './styles.css';

const Landing = () => (
    <div id="text-editor" style={styles.mainContainer}>
        <pre>
            <span>
                <p style={styles.custom1}>
                    &#47;&#47; Need an awesome software developer?
                </p>
            </span>
            <span />
            <span>
                <p style={styles.custom2}>const&nbsp;</p>
                <p style={styles.custom3}>softwareDev&nbsp;</p>
                <p>=&nbsp;</p>
                <p style={styles.custom4}>Irsan-Arisandy()</p>
                <p>;</p>
            </span>
            <span />
            <span>
                <p style={styles.custom2}>let&nbsp;</p>
                <p style={styles.custom3}>coreSkills&nbsp;</p>
                <p>= [</p>
                <p style={styles.custom3}>React, React Native,</p>
            </span>
            <span>
                <p style={styles.custom3}>
                    &emsp;&emsp;JavaScript, HTML5, CSS3, Python,
                </p>
            </span>
            <span>
                <p style={styles.custom3}>
                    &emsp;&emsp;Java, C#, PostgreSQL, MongoDB
                </p>
                <p>];</p>
            </span>
            <span />
            <span />
            <span>
                <p style={styles.custom2}>class&nbsp;</p>
                <p style={styles.custom4}>HireMe()&nbsp;</p>
                <p>&#123;</p>
            </span>
            <span>
                <p style={styles.custom1}>
                    &emsp;&emsp;&#47;&#47; Possibilities awaits
                </p>
            </span>
            <span>
                <p>&#125;</p>
            </span>
            <span />
            <span />
        </pre>
    </div>
);

export default Landing;
