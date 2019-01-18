import { Paper, Tabs, Tab } from '@material-ui/core';
import React from 'react';
import { FlappyBird } from '../../components/FlappyBird';
import { Snakes } from '../../components/Snakes';
import styles from './styles';

class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        let { value } = this.state;

        return (
            <div id="games-container" style={styles.mainContainer}>
                <Paper square style={styles.tabContainer}>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                        fullWidth
                    >
                        <Tab label="Flappy Bird" style={styles.tab} />
                        <Tab label="Snakes" style={styles.tab} />
                    </Tabs>
                </Paper>
                {value === 0 ? <FlappyBird /> : <Snakes />}
            </div>
        );
    }
}

export default Games;
