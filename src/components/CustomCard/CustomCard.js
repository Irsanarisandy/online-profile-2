import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import './styles.css';

const CustomCard = ({
    classes,
    projectImage,
    projectTitle,
    projectTech,
    projectParagraph,
    projectLink
}) => (
    <Card className="customCard">
        <CardMedia component="img" image={projectImage} title={projectTitle} />
        <CardContent>
            <h2 style={styles.cardHeader}>{projectTitle}</h2>
            <p>{projectTech}</p>
            <Divider className={classes.divider} />
            <p style={styles.projectDetail}>{projectParagraph}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button
                variant="outlined"
                href={projectLink}
                target="_blank"
                style={styles.button}
            >
                Go to site
            </Button>
        </CardActions>
    </Card>
);

CustomCard.defaultProps = {
    classes: null
};

CustomCard.propTypes = {
    classes: PropTypes.shape({
        cardActions: PropTypes.object,
        divider: PropTypes.object
    }),
    projectImage: PropTypes.element.isRequired,
    projectTitle: PropTypes.string.isRequired,
    projectTech: PropTypes.string.isRequired,
    projectParagraph: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired
};

export default withStyles(styles)(CustomCard);
