import React from 'react';
import { FlappyBird } from '../../components/FlappyBird';
import styles from './styles';

const Games = () => (
    <div id="gamesContainer" style={styles.mainContainer}>
        <FlappyBird />
    </div>
);

export default Games;
