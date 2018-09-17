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

class Snakes extends React.Component {
    constructor(props) {
        super(props);
        this.snakeGame = React.createRef();
        this.gameHeight = 20;
        this.gameWidth = 30;
        this.snakeInitBody = [[2, 10]];
        this.snakeInitDirection = 'right';
        this.foodInitX = Math.floor(Math.random() * (this.gameWidth - 2) + 1);
        this.foodInitY = Math.floor(Math.random() * (this.gameHeight - 2) + 1);

        let grid = [];
        for (let i = 0; i < this.gameHeight; i += 1) {
            if (i === 0 || i === this.gameHeight - 1) {
                grid.push(
                    new Array(this.gameWidth).fill(styles.arenaBorderColor)
                );
            } else {
                let tempArray = [styles.arenaBorderColor];
                tempArray = tempArray.concat(
                    new Array(this.gameWidth - 2).fill(styles.groundColor)
                );
                tempArray.push(styles.arenaBorderColor);
                grid.push(tempArray);
            }
        }

        const snake = {
            body: this.snakeInitBody,
            direction: this.snakeInitDirection
        };
        this.snakeInitBody.forEach(snakePos => {
            grid[snakePos[1]][snakePos[0]] = styles.snakeColor;
        });

        let initFood = {
            x: this.foodInitX,
            y: this.foodInitY
        };
        while (this.checkContainPos(this.snakeInitBody, initFood)) {
            initFood.x = Math.floor(Math.random() * (this.gameWidth - 2) + 1);
            initFood.y = Math.floor(Math.random() * (this.gameHeight - 2) + 1);
        }
        grid[initFood.y][initFood.x] = styles.foodColor;

        this.state = {
            grid,
            snake,
            food: initFood,
            died: false,
            score: 0,
            openDialog: false
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleSpace, false);

        this.snakeGame.current.focus();

        this.timerID = setInterval(() => {
            let { snake, food, died, score } = this.state;
            // updates game every 0.2 sec
            if (died) {
                return;
            }

            let gridCopy = [];
            for (let i = 0; i < this.gameHeight; i += 1) {
                if (i === 0 || i === this.gameHeight - 1) {
                    gridCopy.push(
                        new Array(this.gameWidth).fill(styles.arenaBorderColor)
                    );
                } else {
                    let tempArray = [styles.arenaBorderColor];
                    tempArray = tempArray.concat(
                        new Array(this.gameWidth - 2).fill(styles.groundColor)
                    );
                    tempArray.push(styles.arenaBorderColor);
                    gridCopy.push(tempArray);
                }
            }

            const prevTailPos = snake.body[0];
            let snakeNewBody =
                snake.body.length === 1
                    ? []
                    : snake.body.slice(1, snake.body.length);
            const head = snake.body[snake.body.length - 1];
            const neck =
                snake.body.length === 1
                    ? snake.body[snake.body.length - 1]
                    : snake.body[snake.body.length - 2];
            if (snake.direction === 'up') {
                if (neck[1] !== head[1] - 1) {
                    snakeNewBody.push([head[0], head[1] - 1]);
                } else {
                    snakeNewBody.push([head[0], head[1] + 1]);
                }
            } else if (snake.direction === 'down') {
                if (neck[1] !== head[1] + 1) {
                    snakeNewBody.push([head[0], head[1] + 1]);
                } else {
                    snakeNewBody.push([head[0], head[1] - 1]);
                }
            } else if (snake.direction === 'left') {
                if (neck[0] !== head[0] - 1) {
                    snakeNewBody.push([head[0] - 1, head[1]]);
                } else {
                    snakeNewBody.push([head[0] + 1, head[1]]);
                }
            } else if (snake.direction === 'right') {
                if (neck[0] !== head[0] + 1) {
                    snakeNewBody.push([head[0] + 1, head[1]]);
                } else {
                    snakeNewBody.push([head[0] - 1, head[1]]);
                }
            }

            let foodCopy = food;
            let containPos = this.checkContainPos(snakeNewBody, foodCopy);
            if (containPos) {
                this.setState({ score: score + 1 });
                snakeNewBody.unshift(prevTailPos);
                while (containPos) {
                    foodCopy.x = Math.floor(
                        Math.random() * (this.gameWidth - 2) + 1
                    );
                    foodCopy.y = Math.floor(
                        Math.random() * (this.gameHeight - 2) + 1
                    );
                    containPos = this.checkContainPos(snakeNewBody, foodCopy);
                }
            }

            const newSnake = {
                body: snakeNewBody,
                direction: snake.direction
            };
            snakeNewBody.forEach(snakePos => {
                gridCopy[snakePos[1]][snakePos[0]] = styles.snakeColor;
            });
            gridCopy[foodCopy.y][foodCopy.x] = styles.foodColor;

            const movedHead = snakeNewBody[snakeNewBody.length - 1];
            const headPos = {
                x: movedHead[0],
                y: movedHead[1]
            };

            let snakeDied =
                headPos.x === 0 ||
                headPos.x === this.gameWidth - 1 ||
                headPos.y === 0 ||
                headPos.y === this.gameHeight - 1;

            if (!snakeDied && snakeNewBody.length > 4) {
                snakeDied = this.checkContainPos(
                    snakeNewBody.slice(0, snakeNewBody.length - 4),
                    headPos
                );
            }

            if (snakeDied) {
                gridCopy[headPos.y][headPos.x] = 'red';
            }

            this.setState({
                grid: gridCopy,
                snake: newSnake,
                food: foodCopy,
                died: snakeDied
            });
        }, 200);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown, false);
        clearInterval(this.timerID);
    }

    checkContainPos = (snakeBody, currPos) => {
        for (let snakePos of snakeBody) {
            if (snakePos[0] === currPos.x && snakePos[1] === currPos.y) {
                return true;
            }
        }
        return false;
    };

    handleKeyDown = event => {
        event.preventDefault();
        let { snake, died } = this.state;

        if (died) {
            return;
        }

        let snakeCopy = snake;

        if (event.key === 'ArrowUp') {
            snakeCopy.direction = 'up';
        } else if (event.key === 'ArrowDown') {
            snakeCopy.direction = 'down';
        } else if (event.key === 'ArrowLeft') {
            snakeCopy.direction = 'left';
        } else if (event.key === 'ArrowRight') {
            snakeCopy.direction = 'right';
        }

        this.setState({ snake: snakeCopy });
    };

    restart = () => {
        let newSnake = {
            body: this.snakeInitBody,
            direction: this.snakeInitDirection
        };
        this.setState({ died: false, snake: newSnake, score: 0 });
        this.snakeGame.current.focus();
    };

    handleOpen = () => {
        this.setState({ openDialog: true });
    };

    handleClose = () => {
        this.setState({ openDialog: false });
    };

    render() {
        let { died, grid, openDialog, score } = this.state;
        let { classes } = this.props;

        return (
            <div id="snake-game">
                <h3 style={styles.score}>{score}</h3>
                <div
                    onKeyDown={this.handleKeyDown}
                    role="button"
                    tabIndex={0}
                    ref={this.snakeGame}
                >
                    <Grid grid={grid} />
                </div>
                <Button onClick={this.handleOpen} style={styles.buttonStyle}>
                    <Help />
                    &nbsp;How To Play
                </Button>
                <Dialog open={openDialog} onClose={this.handleClose}>
                    <DialogTitle>
                        <span style={styles.dialogHeader}>How To Play:</span>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText className={classes.dialogText}>
                            Simply press the arrow keys to move. The aim of the
                            game is to eat as many food as possible, while
                            avoiding the border and your own body.
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
                {died ? (
                    <Button onClick={this.restart} style={styles.buttonStyle}>
                        <Restore />
                        &nbsp;Restart
                    </Button>
                ) : null}
            </div>
        );
    }
}

Snakes.defaultProps = {
    classes: null
};

Snakes.propTypes = {
    classes: PropTypes.shape()
};

export default withStyles(styles)(Snakes);
