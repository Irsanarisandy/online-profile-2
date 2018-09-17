import React from 'react';
import { FlappyBird } from '../../components/FlappyBird';
// import { Snakes } from '../../components/Snakes';
import styles from './styles';

const Games = () => (
    <div id="games-container" style={styles.mainContainer}>
        <FlappyBird />
        {/* Need to add choice selection for user to choose between either games */}
        {/* <Snakes /> */}
    </div>
);

export default Games;
