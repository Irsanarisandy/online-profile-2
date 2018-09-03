import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Help, Restore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid } from '../Grid';
import styles from './styles';

class FlappyBird extends React.Component {
    constructor(props) {
        super(props);
        this.gameHeight = 20;
        this.gameWidth = 30;
        this.birdInitHeight = 10;
        this.birdPosition = 1;
        this.towerAmount = 16;
        this.towerInitPos = this.birdPosition + 1;
        this.towerHeightGap = 5;
        this.towerPosDistance = 4;
        this.minTowerHeight = 3;
        this.maxTowerHeight = this.gameHeight / 2;

        let grid = [];
        for (let i = 0; i < this.gameHeight; i += 1) {
            if (i < this.gameHeight - 5) {
                grid.push(new Array(this.gameWidth).fill(styles.skyColor));
            } else {
                grid.push(new Array(this.gameWidth).fill(styles.groundColor));
            }
        }

        let towers = [];
        let initialHeight = 0;
        let initialPosition = this.towerInitPos;
        let initialOnground = false;
        for (let i = 0; i < this.towerAmount; i += 1) {
            initialHeight =
                i % 2 === 0
                    ? Math.floor(
                          Math.random() *
                              (this.maxTowerHeight - this.minTowerHeight)
                      ) + this.minTowerHeight
                    : this.gameHeight - initialHeight - this.towerHeightGap;
            initialOnground = i % 2 === 0;
            towers.push({
                height: initialHeight,
                position: initialPosition,
                onground: initialOnground
            });
            if (i % 2 === 1) {
                // min. index = 0, max. index = 29
                initialPosition +=
                    initialPosition < 26
                        ? this.towerPosDistance
                        : this.towerPosDistance - 1;
            }
        }

        const bird = {
            height: this.birdInitHeight,
            position: this.birdPosition
        };
        grid[bird.height][bird.position] = styles.birdColor;

        this.state = {
            grid,
            towers,
            bird,
            crashed: false,
            score: 0,
            open: false
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleSpace, false);

        this.timerID = setInterval(() => {
            let { bird, crashed, score, towers } = this.state;
            // updates game every 0.2 sec
            if (crashed) {
                return;
            }

            let gridCopy = [];
            for (let i = 0; i < this.gameHeight; i += 1) {
                if (i < this.gameHeight - 5) {
                    gridCopy.push(
                        new Array(this.gameWidth).fill(styles.skyColor)
                    );
                } else {
                    gridCopy.push(
                        new Array(this.gameWidth).fill(styles.groundColor)
                    );
                }
            }

            let towersCopy = towers.slice(); // copy the array object, not pointer
            const generatedHeight =
                Math.floor(
                    Math.random() * (this.maxTowerHeight - this.minTowerHeight)
                ) + this.minTowerHeight;
            for (let i = 0; i < towersCopy.length; i += 1) {
                towersCopy[i].position -= 1;
                if (towersCopy[i].position < 0) {
                    towersCopy[i].position = this.gameWidth - 1;
                    towersCopy[i].height = !towersCopy[i].onground
                        ? generatedHeight
                        : this.gameHeight -
                          generatedHeight -
                          this.towerHeightGap;
                }
            }

            for (let i = 0; i < towersCopy.length; i += 1) {
                for (let j = 0; j < towersCopy[i].height; j += 1) {
                    if (towersCopy[i].onground) {
                        gridCopy[this.gameHeight - j - 1][
                            towersCopy[i].position
                        ] = styles.towerColor;
                    } else {
                        gridCopy[j][towersCopy[i].position] = styles.towerColor;
                    }
                }
            }

            let birdCopy = bird;
            birdCopy.height += 1; // bird goes down by gravity (inverse)

            let birdCrashed =
                birdCopy.height < 0 || birdCopy.height > this.gameHeight - 1;
            let reachedTower = false;
            for (let i = 0; i < this.gameHeight; i += 1) {
                if (gridCopy[i][this.birdPosition] === styles.towerColor) {
                    reachedTower = true;

                    if (birdCopy.height === i) {
                        birdCrashed = true;
                    }
                }
            }
            if (birdCrashed) {
                this.setState({ crashed: true });
            } else if (reachedTower) {
                this.setState({ score: score + 1 });
            }

            gridCopy[birdCopy.height][birdCopy.position] = styles.birdColor;

            this.setState({
                grid: gridCopy,
                towers: towersCopy,
                bird: birdCopy
            });
        }, 200);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleSpace, false);
        clearInterval(this.timerID);
    }

    handleClick = event => {
        event.preventDefault();
        let { bird, crashed } = this.state;
        if (crashed) {
            return;
        }
        let birdCopy = bird;
        birdCopy.height -= 3; // bird flies up (inverse)
        this.setState({ bird: birdCopy });
    };

    handleSpace = event => {
        event.preventDefault();
        // older browsers returns 'Spacebar'
        if (event.key === ' ' || event.key === 'Spacebar') {
            this.handleClick(event);
        }
    };

    restart = () => {
        let { bird } = this.state;
        let birdCopy = bird;
        birdCopy.height = this.birdInitHeight;
        this.setState({ crashed: false, bird: birdCopy, score: 0 });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        let { crashed, grid, open, score } = this.state;
        let { classes } = this.props;

        return (
            <div id="flappy-bird">
                <h3 style={styles.score}>{score}</h3>
                <div
                    onClick={this.handleClick}
                    onKeyPress={this.handleSpace}
                    role="button"
                    tabIndex={0}
                >
                    <Grid grid={grid} />
                </div>
                <Button onClick={this.handleOpen} style={styles.buttonStyle}>
                    <Help />
                    &nbsp;How To Play
                </Button>
                <Dialog open={open} onClose={this.handleClose}>
                    <DialogTitle>
                        <span style={styles.dialogHeader}>How To Play:</span>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText className={classes.dialogText}>
                            Simply left click on the game, or press space, to
                            fly up. The aim of the game is to avoid as many of
                            the towers as possible.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            style={styles.dialogButton}
                            onClick={this.handleClose}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                {crashed ? (
                    <Button onClick={this.restart} style={styles.buttonStyle}>
                        <Restore />
                        &nbsp;Restart
                    </Button>
                ) : null}
            </div>
        );
    }
}

FlappyBird.defaultProps = {
    classes: null
};

FlappyBird.propTypes = {
    classes: PropTypes.shape()
};

export default withStyles(styles)(FlappyBird);
