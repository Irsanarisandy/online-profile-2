import { LinearProgress } from '@material-ui/core';
import React from 'react';
import skillList from './skillList';
import styles from './styles';
import './styles.css';

const Skills = () => (
    <div id="skills-section">
        <h3 style={styles.skillsSubHeader}>Website / Mobile Apps</h3>
        <div style={styles.skillsContainer}>
            {skillList.apps.map(item => (
                <div
                    className="skill-container"
                    style={styles.skillContainer}
                    key={item.skill}
                >
                    <div style={styles.skillDesc}>
                        <p>{item.skill}</p>
                        <p style={styles.percentage}>{item.percentage}%</p>
                    </div>
                    <LinearProgress
                        style={styles.progress}
                        variant="determinate"
                        value={item.percentage}
                    />
                </div>
            ))}
        </div>
        <h3 style={styles.skillsSubHeader}>General Programming</h3>
        <div style={styles.skillsContainer}>
            {skillList.general.map(item => (
                <div
                    className="skill-container"
                    style={styles.skillContainer}
                    key={item.skill}
                >
                    <div style={styles.skillDesc}>
                        <p>{item.skill}</p>
                        <p style={styles.percentage}>{item.percentage}%</p>
                    </div>
                    <LinearProgress
                        style={styles.progress}
                        variant="determinate"
                        value={item.percentage}
                    />
                </div>
            ))}
        </div>
        <h3 style={styles.skillsSubHeader}>Database</h3>
        <div style={styles.skillsContainer}>
            {skillList.database.map(item => (
                <div
                    className="skill-container"
                    style={styles.skillContainer}
                    key={item.skill}
                >
                    <div style={styles.skillDesc}>
                        <p>{item.skill}</p>
                        <p style={styles.percentage}>{item.percentage}%</p>
                    </div>
                    <LinearProgress
                        style={styles.progress}
                        variant="determinate"
                        value={item.percentage}
                    />
                </div>
            ))}
        </div>
        <h3 style={styles.skillsSubHeader}>Others</h3>
        <div style={styles.skillsContainer}>
            {skillList.others.map(item => (
                <div
                    className="skill-container"
                    style={styles.skillContainer}
                    key={item.skill}
                >
                    <div style={styles.skillDesc}>
                        <p>{item.skill}</p>
                        <p style={styles.percentage}>{item.percentage}%</p>
                    </div>
                    <LinearProgress
                        style={styles.progress}
                        variant="determinate"
                        value={item.percentage}
                    />
                </div>
            ))}
        </div>
    </div>
);

export default Skills;
