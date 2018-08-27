import { LinearProgress } from '@material-ui/core';
import React from 'react';
import styles from './styles';
import './styles.css';

const Skills = () => (
    <div id="skills-section">
        <h3 style={styles.skillsSubHeader}>Website / Mobile Apps</h3>
        <div style={styles.skillsContainer}>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>React / React Native</p>
                    <p style={styles.percentage}>70%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={70}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>Flutter</p>
                    <p style={styles.percentage}>50%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={50}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>Vue</p>
                    <p style={styles.percentage}>70%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={70}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>JavaScript / TypeScript</p>
                    <p style={styles.percentage}>75%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={75}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>HTML5 &amp; CSS3 / SCSS / LESS</p>
                    <p style={styles.percentage}>85%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={85}
                />
            </div>
        </div>
        <h3 style={styles.skillsSubHeader}>General Programming</h3>
        <div style={styles.skillsContainer}>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>Python</p>
                    <p style={styles.percentage}>90%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={90}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>Java</p>
                    <p style={styles.percentage}>75%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={75}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>C#</p>
                    <p style={styles.percentage}>75%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={75}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>Dart</p>
                    <p style={styles.percentage}>40%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={40}
                />
            </div>
        </div>
        <h3 style={styles.skillsSubHeader}>Database</h3>
        <div style={styles.skillsContainer}>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>MySQL</p>
                    <p style={styles.percentage}>75%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={75}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>PostgreSQL</p>
                    <p style={styles.percentage}>75%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={75}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>MongoDB</p>
                    <p style={styles.percentage}>70%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={70}
                />
            </div>
        </div>
        <h3 style={styles.skillsSubHeader}>Others</h3>
        <div style={styles.skillsContainer}>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>Git</p>
                    <p style={styles.percentage}>80%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={80}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>Photoshop</p>
                    <p style={styles.percentage}>50%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={50}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>Microsoft Word</p>
                    <p style={styles.percentage}>95%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={95}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>Microsoft Excel</p>
                    <p style={styles.percentage}>90%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={90}
                />
            </div>
            <div className="skill-container" style={styles.skillContainer}>
                <div style={styles.skillDesc}>
                    <p>Microsoft Powerpoint</p>
                    <p style={styles.percentage}>85%</p>
                </div>
                <LinearProgress
                    style={styles.progress}
                    variant="determinate"
                    value={85}
                />
            </div>
        </div>
    </div>
);

export default Skills;
