import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const GridCell = ({ cell }) => {
    const style = {
        ...styles.gridCell,
        backgroundColor: cell
    };

    return <div style={style} />;
};

GridCell.propTypes = {
    cell: PropTypes.string.isRequired
};

const GridRow = ({ row }) => (
    <div style={styles.gridRow}>
        {row.map((cell, index) => (
            <GridCell cell={cell} key={`c${index.toString()}`} />
        ))}
    </div>
);

GridRow.propTypes = {
    row: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Grid = ({ grid }) => (
    <div style={styles.grid}>
        {grid.map((row, index) => (
            <GridRow row={row} key={`r${index.toString()}`} />
        ))}
    </div>
);

Grid.propTypes = {
    grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

export default Grid;
